'use strict';

/**
 * Korteks Web — Theme management (light / dark / system)
 */

import { STORAGE_KEYS, THEME_MODES } from './utils.js';

/** @type {'light' | 'dark' | 'system'} */
let currentMode = 'system';

/** @type {MediaQueryList | null} */
let systemMediaQuery = null;

/** @type {(() => void) | null} */
let systemChangeHandler = null;

/**
 * @returns {'light' | 'dark' | 'system'}
 */
function getStoredMode() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.theme);
    if (stored && THEME_MODES.includes(/** @type {'light' | 'dark' | 'system'} */ (stored))) {
      return /** @type {'light' | 'dark' | 'system'} */ (stored);
    }
  } catch {
    /* localStorage unavailable */
  }
  return 'system';
}

/**
 * @param {'light' | 'dark' | 'system'} mode
 */
function persistMode(mode) {
  try {
    localStorage.setItem(STORAGE_KEYS.theme, mode);
  } catch {
    /* ignore */
  }
}

/**
 * @param {'light' | 'dark' | 'system'} mode
 */
export function applyTheme(mode) {
  currentMode = mode;
  const root = document.documentElement;

  if (mode === 'system') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', mode);
  }

  updateToggleButton();
}

/**
 * @returns {'light' | 'dark' | 'system'}
 */
function getNextMode() {
  const index = THEME_MODES.indexOf(currentMode);
  return THEME_MODES[(index + 1) % THEME_MODES.length];
}

/**
 * @param {'light' | 'dark' | 'system'} mode
 * @returns {string}
 */
function getThemeLabel(mode) {
  switch (mode) {
    case 'light':
      return 'Tema: Açık';
    case 'dark':
      return 'Tema: Koyu';
    default:
      return 'Tema: Sistem';
  }
}

function updateToggleButton() {
  const toggle = document.querySelector('.theme-toggle');
  if (!(toggle instanceof HTMLButtonElement)) return;

  toggle.setAttribute('aria-label', getThemeLabel(currentMode));
  toggle.setAttribute(
    'aria-pressed',
    currentMode === 'system' ? 'false' : 'true'
  );
  toggle.dataset.themeMode = currentMode;
}

function watchSystemPreference() {
  if (!window.matchMedia) return;

  systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  systemChangeHandler = () => {
    if (currentMode === 'system') {
      applyTheme('system');
    }
  };

  if (typeof systemMediaQuery.addEventListener === 'function') {
    systemMediaQuery.addEventListener('change', systemChangeHandler);
  } else if (typeof systemMediaQuery.addListener === 'function') {
    systemMediaQuery.addListener(systemChangeHandler);
  }
}

function unwatchSystemPreference() {
  if (!systemMediaQuery || !systemChangeHandler) return;

  if (typeof systemMediaQuery.removeEventListener === 'function') {
    systemMediaQuery.removeEventListener('change', systemChangeHandler);
  } else if (typeof systemMediaQuery.removeListener === 'function') {
    systemMediaQuery.removeListener(systemChangeHandler);
  }

  systemMediaQuery = null;
  systemChangeHandler = null;
}

/**
 * Apply stored theme as early as possible.
 */
export function initThemeEarly() {
  applyTheme(getStoredMode());
}

/**
 * Bind theme toggle interactions.
 */
export function initTheme() {
  const toggle = document.querySelector('.theme-toggle');
  if (!(toggle instanceof HTMLButtonElement)) return;

  applyTheme(getStoredMode());
  watchSystemPreference();

  toggle.addEventListener('click', () => {
    const nextMode = getNextMode();
    persistMode(nextMode);
    applyTheme(nextMode);
  });
}

/** Cleanup for testing or hot reload scenarios. */
export function destroyTheme() {
  unwatchSystemPreference();
}
