'use strict';

/**
 * Korteks Web — Reveal animations and lazy loading
 */

import { injectEnhancementStyles, prefersReducedMotion } from './utils.js';

/** @type {IntersectionObserver | null} */
let revealObserver = null;

const REVEAL_SELECTOR = [
  '.section',
  '.feature-card',
  '.content-card',
  '.callout',
  '.card',
  '.hero',
  '.page-header',
  '.accordion__item',
  '.table-wrapper',
].join(', ');

function initRevealAnimations() {
  injectEnhancementStyles();

  const main = document.getElementById('main-content');
  if (!main) return;

  const elements = main.querySelectorAll(REVEAL_SELECTOR);
  if (elements.length === 0) return;

  if (prefersReducedMotion()) {
    elements.forEach((element) => {
      element.classList.add('is-visible');
    });
    return;
  }

  elements.forEach((element, index) => {
    element.classList.add('js-reveal');
    element.style.transitionDelay = `${Math.min(index * 30, 180)}ms`;
  });

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08,
    }
  );

  elements.forEach((element) => revealObserver.observe(element));
}

function initLazyMedia() {
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach((image) => {
    if (!(image instanceof HTMLImageElement)) return;
    image.loading = 'lazy';
    image.decoding = 'async';
  });

  const iframes = document.querySelectorAll('iframe:not([loading])');
  iframes.forEach((iframe) => {
    if (!(iframe instanceof HTMLIFrameElement)) return;
    iframe.loading = 'lazy';
  });
}

export function initAnimations() {
  initRevealAnimations();
  initLazyMedia();
}

export function destroyAnimations() {
  revealObserver?.disconnect();
  revealObserver = null;
}
