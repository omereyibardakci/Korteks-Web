'use strict';

/**
 * Korteks Web — Clipboard utilities
 */

/**
 * @param {string} text
 * @returns {Promise<boolean>}
 */
export async function copyToClipboard(text) {
  if (!text) return false;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      /* fall through to legacy method */
    }
  }

  return copyWithFallback(text);
}

/**
 * @param {string} text
 * @returns {boolean}
 */
function copyWithFallback(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.top = '-9999px';
  textarea.style.left = '-9999px';
  textarea.style.opacity = '0';

  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, text.length);

  let success = false;

  try {
    success = document.execCommand('copy');
  } catch {
    success = false;
  }

  document.body.removeChild(textarea);
  return success;
}

/**
 * @param {HTMLButtonElement} button
 * @param {string} [successLabel='Copied!']
 * @param {number} [duration=2000]
 */
export function showCopyFeedback(button, successLabel = 'Copied!', duration = 2000) {
  const originalLabel = button.textContent ?? '';
  button.textContent = successLabel;
  button.classList.add('is-copied');
  button.setAttribute('aria-label', successLabel);

  window.setTimeout(() => {
    button.textContent = originalLabel;
    button.classList.remove('is-copied');
    button.setAttribute('aria-label', 'Bağlantıyı kopyala');
  }, duration);
}
