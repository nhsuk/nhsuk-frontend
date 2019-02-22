/*
 * Skip link
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when elected so the next focusable element is not at the jumped to area.
 * This Javascript hack focuses on the first page <h1> element
 * (if one exists, which it should) by adding tabindex = -1 to it and
 * then removes it when focus is off it.
 */

function addFocus() {
  const headingElement = document.getElementsByTagName('H1')[0];
  headingElement.setAttribute('tabIndex', '-1');
  headingElement.focus();
}

function removeFocus() {
  const headingElement = document.getElementsByTagName('H1')[0];
  headingElement.removeAttribute('tabIndex');
}

function handleSkipLink() {
  const skipLinkElement = document.querySelector('.nhsuk-skip-link');
  const headingElement = document.getElementsByTagName('H1')[0];
  if (skipLinkElement && headingElement) {
    skipLinkElement.addEventListener('click', e => { /* eslint-disable-line arrow-parens */
      e.preventDefault();
      addFocus();
    });
  }
}

function handleHeader() {
  const skipLinkElement = document.querySelector('.nhsuk-skip-link');
  const headingElement = document.getElementsByTagName('H1')[0];
  if (skipLinkElement && headingElement) {
    headingElement.addEventListener('blur', e => { /* eslint-disable-line arrow-parens */
      e.preventDefault();
      removeFocus();
    });
  }
}

function nhsuk_skipLink() { /* eslint-disable-line camelcase */
  handleSkipLink();
  handleHeader();
}

export default nhsuk_skipLink; /* eslint-disable-line camelcase */
