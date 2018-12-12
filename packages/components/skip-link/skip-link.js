/*
 * Skip link
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when elected so the next focusable element is not at the jumped to area.
 * This Javascript hack focuses on the first page <h1> element
 * (if one exists, which it should) by adding tabindex = -1 to it and
 * then removes it when focus is off it.
 */

const skipLinkElement = document.querySelector('.nhsuk-skip-link');
const headingElement = document.getElementsByTagName('H1')[0];

function addFocus() {
  headingElement.setAttribute('tabIndex', '-1');
  headingElement.focus();
}

function removeFocus() {
  headingElement.removeAttribute('tabIndex');
}

function handleSkipLink() {
  if (skipLinkElement && headingElement) {
    skipLinkElement.addEventListener('click', addFocus);
  }
}

function handleHeader() {
  if (skipLinkElement && headingElement) {
    headingElement.addEventListener('blur', removeFocus);
  }
}

function nhsuk_skipLink() { /* eslint-disable-line camelcase */
  handleSkipLink();
  handleHeader();
}

export default nhsuk_skipLink; /* eslint-disable-line camelcase */
