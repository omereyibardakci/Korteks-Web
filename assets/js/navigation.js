'use strict';

/**
 * Korteks Web — Mobile navigation and FAQ enhancements
 */

import {
  createFocusTrap,
  lockBodyScroll,
  unlockBodyScroll,
  isExternalUrl,
  prefersReducedMotion,
} from './utils.js';

/** @type {ReturnType<typeof createFocusTrap> | null} */
let focusTrap = null;

/** @type {HTMLButtonElement | null} */
let triggerButton = null;

/** @type {HTMLElement | null} */
let menuElement = null;

/** @type {HTMLElement | null} */
let panelElement = null;

/**
 * @returns {boolean}
 */
function isMenuOpen() {
  return menuElement?.classList.contains('mobile-menu--open') ?? false;
}

function openMobileMenu() {
  if (!menuElement || !triggerButton || !panelElement) return;

  menuElement.classList.add('mobile-menu--open');
  menuElement.setAttribute('aria-hidden', 'false');
  triggerButton.setAttribute('aria-expanded', 'true');
  lockBodyScroll();

  focusTrap = createFocusTrap(panelElement);
  focusTrap.activate();
}

function closeMobileMenu() {
  if (!menuElement || !triggerButton) return;

  menuElement.classList.remove('mobile-menu--open');
  menuElement.setAttribute('aria-hidden', 'true');
  triggerButton.setAttribute('aria-expanded', 'false');
  unlockBodyScroll();

  if (focusTrap) {
    focusTrap.deactivate();
    focusTrap = null;
  }
}

/**
 * @param {KeyboardEvent} event
 */
function handleDocumentKeyDown(event) {
  if (event.key === 'Escape' && isMenuOpen()) {
    event.preventDefault();
    closeMobileMenu();
  }
}

/**
 * @param {MouseEvent} event
 */
function handleDocumentClick(event) {
  if (!isMenuOpen() || !menuElement || !panelElement) return;

  const target = event.target;
  if (!(target instanceof Node)) return;

  if (panelElement.contains(target)) return;
  if (triggerButton?.contains(target)) return;

  closeMobileMenu();
}

function initMobileMenu() {
  menuElement = document.getElementById('mobile-menu');
  triggerButton = document.querySelector('.mobile-menu__trigger');
  panelElement = menuElement?.querySelector('.mobile-menu__panel') ?? null;

  if (!(menuElement instanceof HTMLElement)) return;
  if (!(triggerButton instanceof HTMLButtonElement)) return;
  if (!(panelElement instanceof HTMLElement)) return;

  const closeButton = menuElement.querySelector('.mobile-menu__close');
  const overlay = menuElement.querySelector('.mobile-menu__overlay');
  const menuLinks = menuElement.querySelectorAll('.mobile-menu__body a[href]');

  triggerButton.addEventListener('click', () => {
    if (isMenuOpen()) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  if (closeButton instanceof HTMLButtonElement) {
    closeButton.addEventListener('click', closeMobileMenu);
  }

  if (overlay instanceof HTMLElement) {
    overlay.addEventListener('click', closeMobileMenu);
  }

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', handleDocumentKeyDown);
  document.addEventListener('click', handleDocumentClick);

  if (!isMenuOpen()) {
    menuElement.setAttribute('aria-hidden', 'true');
    triggerButton.setAttribute('aria-expanded', 'false');
  }
}

/**
 * @param {HTMLDetailsElement} details
 */
function animateDetailsOpen(details) {
  const panel = details.querySelector('.accordion__panel');
  if (!(panel instanceof HTMLElement) || prefersReducedMotion()) return;

  panel.style.height = '0px';
  panel.style.display = 'block';

  requestAnimationFrame(() => {
    panel.style.height = `${panel.scrollHeight}px`;
  });

  const onTransitionEnd = (event) => {
    if (event.propertyName !== 'height') return;
    panel.style.height = 'auto';
    panel.removeEventListener('transitionend', onTransitionEnd);
  };

  panel.addEventListener('transitionend', onTransitionEnd);
}

/**
 * @param {HTMLDetailsElement} details
 */
function animateDetailsClose(details) {
  const panel = details.querySelector('.accordion__panel');
  if (!(panel instanceof HTMLElement) || prefersReducedMotion()) return;

  panel.style.height = `${panel.scrollHeight}px`;

  requestAnimationFrame(() => {
    panel.style.height = '0px';
  });
}

/**
 * @param {HTMLDetailsElement} details
 */
function updateDetailsAria(details) {
  const summary = details.querySelector('.accordion__trigger');
  if (summary instanceof HTMLElement) {
    summary.setAttribute('aria-expanded', details.open ? 'true' : 'false');
  }

  details.classList.toggle('accordion__item--active', details.open);
}

function initFaqAccordions() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    const items = accordion.querySelectorAll('.accordion__item');

    items.forEach((item) => {
      if (!(item instanceof HTMLDetailsElement)) return;

      updateDetailsAria(item);

      item.addEventListener('toggle', () => {
        if (item.open) {
          animateDetailsOpen(item);

          items.forEach((sibling) => {
            if (sibling !== item && sibling instanceof HTMLDetailsElement && sibling.open) {
              sibling.open = false;
              updateDetailsAria(sibling);
            }
          });
        } else {
          animateDetailsClose(item);
        }

        updateDetailsAria(item);
      });
    });
  });
}

function initExternalLinks() {
  const links = document.querySelectorAll('a[href]');

  links.forEach((link) => {
    if (!(link instanceof HTMLAnchorElement)) return;
    if (link.hasAttribute('target')) return;
    if (link.getAttribute('aria-disabled') === 'true') return;
    if (link.classList.contains('skip-link')) return;

    const href = link.getAttribute('href');
    if (!isExternalUrl(href)) return;

    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

export function initNavigation() {
  initMobileMenu();
  initFaqAccordions();
  initExternalLinks();
}

export function destroyNavigation() {
  document.removeEventListener('keydown', handleDocumentKeyDown);
  document.removeEventListener('click', handleDocumentClick);

  if (isMenuOpen()) {
    closeMobileMenu();
  }
}
