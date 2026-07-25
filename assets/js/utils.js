'use strict';

/**
 * Korteks Web — Shared utilities
 */

/** @type {Readonly<Record<string, string>>} */
export const STORAGE_KEYS = Object.freeze({
  theme: 'korteks-theme',
});

/** @type {'light' | 'dark' | 'system'} */
export const THEME_MODES = Object.freeze(['system', 'light', 'dark']);

/**
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * @template {(...args: unknown[]) => void} T
 * @param {T} fn
 * @param {number} [wait=100]
 * @returns {(...args: Parameters<T>) => void}
 */
export function debounce(fn, wait = 100) {
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), wait);
  };
}

/**
 * @template {(...args: unknown[]) => void} T
 * @param {T} fn
 * @param {number} [limit=100]
 * @returns {(...args: Parameters<T>) => void}
 */
export function throttle(fn, limit = 100) {
  let inThrottle = false;

  return (...args) => {
    if (inThrottle) return;
    fn(...args);
    inThrottle = true;
    setTimeout(() => {
      inThrottle = false;
    }, limit);
  };
}

/**
 * @param {string} name
 * @param {() => void} initFn
 */
export function safeInit(name, initFn) {
  try {
    initFn();
  } catch (error) {
    console.warn(`[Korteks] ${name} failed to initialize:`, error);
  }
}

/**
 * @param {ParentNode} container
 * @returns {HTMLElement[]}
 */
export function getFocusableElements(container) {
  const selector = [
    'a[href]:not([aria-disabled="true"])',
    'button:not([disabled]):not([aria-disabled="true"])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  return Array.from(container.querySelectorAll(selector)).filter((element) => {
    if (!(element instanceof HTMLElement)) return false;
    if (element.getAttribute('aria-hidden') === 'true') return false;
    return element.getClientRects().length > 0;
  });
}

/**
 * @param {HTMLElement} container
 */
export function createFocusTrap(container) {
  /** @type {Element | null} */
  let previousFocus = null;

  /** @param {KeyboardEvent} event */
  const handleKeyDown = (event) => {
    if (event.key !== 'Tab') return;

    const focusable = getFocusableElements(container);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return {
    activate() {
      previousFocus = document.activeElement;
      container.addEventListener('keydown', handleKeyDown);

      const focusable = getFocusableElements(container);
      if (focusable.length > 0) {
        focusable[0].focus();
      }
    },
    deactivate() {
      container.removeEventListener('keydown', handleKeyDown);

      if (previousFocus instanceof HTMLElement && typeof previousFocus.focus === 'function') {
        previousFocus.focus();
      }
    },
  };
}

export function lockBodyScroll() {
  const scrollY = window.scrollY;
  document.body.dataset.scrollLock = String(scrollY);
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';
}

export function unlockBodyScroll() {
  const scrollY = document.body.dataset.scrollLock;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.style.overflow = '';
  delete document.body.dataset.scrollLock;

  if (scrollY) {
    window.scrollTo(0, Number.parseInt(scrollY, 10));
  }
}

/**
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * @param {string | null | undefined} href
 * @returns {boolean}
 */
export function isExternalUrl(href) {
  if (!href) return false;
  if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return false;
  }

  try {
    const url = new URL(href, window.location.href);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

/**
 * @param {string} id
 * @returns {boolean}
 */
export function elementExists(id) {
  return Boolean(document.getElementById(id));
}

let stylesInjected = false;

/** Inject minimal styles required by JS-only enhancements. */
export function injectEnhancementStyles() {
  if (stylesInjected) return;
  stylesInjected = true;

  const style = document.createElement('style');
  style.id = 'korteks-js-enhancements';
  style.textContent = `
    .reading-progress {
      position: fixed;
      inset-block-start: 0;
      inset-inline: 0;
      height: 3px;
      z-index: var(--z-index-tooltip, 800);
      pointer-events: none;
      background: transparent;
    }

    .reading-progress__bar {
      display: block;
      height: 100%;
      width: 0%;
      background: var(--color-accent, #0071e3);
      transition: width 80ms linear;
    }

    @media (prefers-reduced-motion: reduce) {
      .reading-progress__bar {
        transition: none;
      }
    }

    .back-to-top {
      position: fixed;
      inset-block-end: max(1.5rem, env(safe-area-inset-bottom));
      inset-inline-end: max(1.5rem, env(safe-area-inset-right));
      z-index: var(--z-index-sticky, 200);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.75rem;
      height: 2.75rem;
      padding: 0;
      color: var(--color-text-primary, #1d1d1f);
      background: var(--color-bg-elevated, #fff);
      border: 1px solid var(--color-border-secondary, #d2d2d7);
      border-radius: 9999px;
      box-shadow: var(--shadow-md, 0 4px 6px rgb(0 0 0 / 10%));
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(0.5rem);
      transition: opacity 200ms ease, transform 200ms ease, visibility 200ms ease;
    }

    .back-to-top:hover {
      background: var(--color-bg-secondary, #f5f5f7);
    }

    .back-to-top:focus-visible {
      outline: 2px solid var(--color-accent, #0071e3);
      outline-offset: 2px;
    }

    .back-to-top.is-visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    @media (prefers-reduced-motion: reduce) {
      .back-to-top {
        transition: none;
      }
    }

    .heading-anchor-wrap {
      position: relative;
      display: inline;
    }

    .heading-anchor-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.75rem;
      height: 1.75rem;
      margin-inline-start: 0.35rem;
      padding: 0;
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1;
      color: var(--color-text-tertiary, #86868b);
      background: transparent;
      border: none;
      border-radius: 0.375rem;
      vertical-align: middle;
      cursor: pointer;
      opacity: 0;
      transition: opacity 150ms ease, color 150ms ease, background-color 150ms ease;
    }

    .heading-anchor-wrap:hover .heading-anchor-btn,
    .heading-anchor-wrap:focus-within .heading-anchor-btn,
    .heading-anchor-btn:focus-visible,
    .heading-anchor-btn.is-copied {
      opacity: 1;
    }

    .heading-anchor-btn:hover {
      color: var(--color-accent, #0071e3);
      background: var(--color-accent-subtle, rgb(0 113 227 / 10%));
    }

    .js-reveal {
      opacity: 0;
      transform: translateY(1.25rem);
      transition: opacity 600ms cubic-bezier(0.22, 1, 0.36, 1),
                  transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .js-reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    @media (prefers-reduced-motion: reduce) {
      .js-reveal {
        opacity: 1;
        transform: none;
        transition: none;
      }
    }

    .accordion__panel {
      overflow: hidden;
      transition: height 250ms ease;
    }

    @media (prefers-reduced-motion: reduce) {
      .accordion__panel {
        transition: none;
      }
    }
  `;

  document.head.appendChild(style);
}
