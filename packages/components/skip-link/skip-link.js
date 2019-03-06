/*
 * Skip link
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when elected so the next focusable element is not at the jumped to area.
 * This Javascript hack focuses on the first page <h1> element
 * (if one exists, which it should) by adding tabindex = -1 to it and
 * then removes it when focus is off it.
 */

 class Heading {
   constructor() {
    this.skipLinkElement = document.querySelector('.nhsuk-skip-link');
    this.headingElement = document.getElementsByTagName('H1')[0];

    this.attachListeners();
   }

   attachListeners() {
    if (this.skipLinkElement) {
      this.skipLinkElement.addEventListener('click', this.focus.bind(this));
    }
    if (this.headingElement) {
      this.headingElement.addEventListener('blur', this.removeFocus.bind(this));
    }
  }

  focus(e) {
    e.preventDefault();
    this.headingElement.setAttribute('tabIndex', '-1');
    this.headingElement.focus();
  }

  removeFocus(e) {
    e.preventDefault();
    this.headingElement.removeAttribute('tabIndex');
  }

 }

function nhsuk_skipLink() { /* eslint-disable-line camelcase */
  return {
    heading: new Heading()
  };
}

export default nhsuk_skipLink; /* eslint-disable-line camelcase */
