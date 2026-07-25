'use strict';

/**
 * Korteks Web — Scroll interactions, reading progress, heading anchors
 */

import { copyToClipboard, showCopyFeedback } from './clipboard.js';
import {
  debounce,
  throttle,
  injectEnhancementStyles,
  prefersReducedMotion,
  slugify,
} from './utils.js';

/** @type {HTMLElement | null} */
let progressBar = null;

/** @type {HTMLButtonElement | null} */
let backToTopButton = null;

/** @type {IntersectionObserver | null} */
let sectionObserver = null;

/** @type {Map<string, HTMLAnchorElement>} */
const tocLinkMap = new Map();

const BACK_TO_TOP_THRESHOLD = 400;

/**
 * @param {string} hash
 * @returns {HTMLElement | null}
 */
function getScrollTarget(hash) {
  if (!hash || hash === '#') return null;

  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);

  if (target instanceof HTMLElement) return target;

  const named = document.querySelector(`a[name="${CSS.escape(id)}"]`);
  return named instanceof HTMLElement ? named : null;
}

/**
 * @param {HTMLElement} target
 */
function scrollToTarget(target) {
  const header = document.querySelector('.site-header');
  const headerOffset = header instanceof HTMLElement ? header.offsetHeight + 8 : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });

  if (!target.hasAttribute('tabindex')) {
    target.setAttribute('tabindex', '-1');
  }

  target.focus({ preventScroll: true });
}

function initSmoothAnchors() {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const link = target.closest('a[href^="#"]');
    if (!(link instanceof HTMLAnchorElement)) return;
    if (link.getAttribute('aria-disabled') === 'true') return;

    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const scrollTarget = getScrollTarget(href);
    if (!scrollTarget) return;

    event.preventDefault();
    scrollToTarget(scrollTarget);

    if (history.replaceState) {
      history.replaceState(null, '', href);
    } else {
      window.location.hash = href;
    }
  });
}

function buildTocLinkMap() {
  tocLinkMap.clear();

  const toc = document.getElementById('toc');
  if (!toc) return;

  const links = toc.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    if (!(link instanceof HTMLAnchorElement)) return;
    const hash = link.getAttribute('href');
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    tocLinkMap.set(id, link);
  });
}

/**
 * @param {string} activeId
 */
function setActiveTocLink(activeId) {
  tocLinkMap.forEach((link, id) => {
    const isActive = id === activeId;
    link.classList.toggle('nav-link--active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function initActiveSectionObserver() {
  buildTocLinkMap();
  if (tocLinkMap.size === 0) return;

  const main = document.getElementById('main-content');
  if (!main) return;

  const sections = Array.from(main.querySelectorAll('section[id], article[id]'))
    .filter((section) => section.id && tocLinkMap.has(section.id));

  if (sections.length === 0) return;

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0 && visible[0].target.id) {
        setActiveTocLink(visible[0].target.id);
      }
    },
    {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: [0, 0.1, 0.25, 0.5],
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function initReadingProgress() {
  const main = document.getElementById('main-content');
  if (!main) return;

  injectEnhancementStyles();

  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('role', 'progressbar');
  progress.setAttribute('aria-label', 'Okuma ilerlemesi');
  progress.setAttribute('aria-valuemin', '0');
  progress.setAttribute('aria-valuemax', '100');
  progress.setAttribute('aria-valuenow', '0');

  const bar = document.createElement('span');
  bar.className = 'reading-progress__bar';
  progress.appendChild(bar);

  document.body.prepend(progress);
  progressBar = bar;

  const updateProgress = throttle(() => {
    if (!progressBar) return;

    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;

    if (scrollable <= 0) {
      progressBar.style.width = '0%';
      progress.setAttribute('aria-hidden', 'true');
      return;
    }

    const percent = Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100));
    progressBar.style.width = `${percent}%`;
    progress.setAttribute('aria-valuenow', String(Math.round(percent)));
    progress.removeAttribute('aria-hidden');
  }, 16);

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', debounce(updateProgress, 100), { passive: true });
  updateProgress();
}

function initBackToTop() {
  injectEnhancementStyles();

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'back-to-top';
  button.setAttribute('aria-label', 'Yukarı dön');
  button.hidden = true;
  button.innerHTML = `
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `;

  document.body.appendChild(button);
  backToTopButton = button;

  const toggleVisibility = throttle(() => {
    if (!backToTopButton) return;

    const shouldShow = window.scrollY > BACK_TO_TOP_THRESHOLD;
    backToTopButton.classList.toggle('is-visible', shouldShow);
    backToTopButton.hidden = !shouldShow;
  }, 100);

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  });

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();
}

/**
 * Resolve the hash target for a heading (prefers parent section/article id).
 * @param {HTMLHeadingElement} heading
 * @returns {string | null}
 */
function resolveHeadingHash(heading) {
  const section = heading.closest('section[id], article[id]');
  if (section instanceof HTMLElement && section.id) {
    return section.id;
  }

  if (heading.id) return heading.id;

  const generated = slugify(heading.textContent ?? 'section');
  if (!generated) return null;

  let uniqueId = generated;
  let counter = 1;

  while (document.getElementById(uniqueId)) {
    uniqueId = `${generated}-${counter}`;
    counter += 1;
  }

  heading.id = uniqueId;
  return uniqueId;
}

function initHeadingAnchors() {
  const main = document.getElementById('main-content');
  if (!main) return;

  injectEnhancementStyles();

  const headings = main.querySelectorAll('h2, h3');

  headings.forEach((heading) => {
    if (!(heading instanceof HTMLHeadingElement)) return;
    if (heading.closest('.site-footer, .site-header, .mobile-menu, #toc')) return;

    const id = resolveHeadingHash(heading);
    if (!id) return;

    if (heading.querySelector('.heading-anchor-btn')) return;

    const wrap = document.createElement('span');
    wrap.className = 'heading-anchor-wrap';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'heading-anchor-btn';
    button.textContent = '#';
    button.setAttribute('aria-label', 'Bağlantıyı kopyala');

    button.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const url = new URL(window.location.href);
      url.hash = id;

      const copied = await copyToClipboard(url.toString());
      if (copied) {
        showCopyFeedback(button, 'Copied!', 2000);
      }
    });

    heading.appendChild(wrap);
    wrap.appendChild(button);
  });
}

function scrollToInitialHash() {
  const hash = window.location.hash;
  if (!hash) return;

  const target = getScrollTarget(hash);
  if (!target) return;

  window.requestAnimationFrame(() => {
    scrollToTarget(target);
  });
}

export function initScroll() {
  initSmoothAnchors();
  initActiveSectionObserver();
  initReadingProgress();
  initBackToTop();
  initHeadingAnchors();
  scrollToInitialHash();
}

export function destroyScroll() {
  sectionObserver?.disconnect();
  sectionObserver = null;
  tocLinkMap.clear();

  progressBar?.parentElement?.remove();
  progressBar = null;

  backToTopButton?.remove();
  backToTopButton = null;
}
