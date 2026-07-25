'use strict';

/**
 * Korteks Web — Application entry point
 *
 * Initializes all progressive enhancement modules.
 * Each module fails gracefully if its DOM dependencies are absent.
 */

import { initTheme, initThemeEarly } from './theme.js';
import { initNavigation } from './navigation.js';
import { initScroll } from './scroll.js';
import { initAnimations } from './animations.js';
import { safeInit } from './utils.js';

/** Apply theme before other UI initializes to reduce flash. */
initThemeEarly();

function initApp() {
  safeInit('Theme', initTheme);
  safeInit('Navigation', initNavigation);
  safeInit('Scroll', initScroll);
  safeInit('Animations', initAnimations);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp, { once: true });
} else {
  initApp();
}
