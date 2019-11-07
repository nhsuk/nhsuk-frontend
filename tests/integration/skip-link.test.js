import SkipLink from '../../packages/components/skip-link/skip-link';

// Mock HTML
const skipLinkHtml = '<a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>';
const headingHtml = '<h1>Test Heading</h1>';

// DOM Elements to be set
let skipLink;
let heading;

// Helper to set DOM Elements
const initTest = (html = '') => {
  document.body.innerHTML = html;
  heading = document.querySelector('h1');
  skipLink = document.querySelector('.nhsuk-skip-link');
  SkipLink();
};

describe('NHS.UK skiplink', () => {
  describe('Does not throw an error', () => {
    it('if no skiplink exists', () => {
      initTest(headingHtml);
      expect(heading).toBeDefined();
      expect(skipLink).toBeNull();
    });

    it('if no heading exists', () => {
      initTest(skipLinkHtml);
      expect(skipLink).toBeDefined();
      expect(heading).toBeNull();
    });

    it('if no skiplink or heading exists', () => {
      initTest();
      expect(heading).toBeNull();
      expect(skipLink).toBeNull();
    });
  });

  describe('Focuses the heading on skiplink click', () => {
    it('if skiplink and heading elements exist', () => {
      initTest(skipLinkHtml + headingHtml);
      expect(skipLink).toBeDefined();
      expect(heading).toBeDefined();

      skipLink.click();

      expect(heading.getAttribute('tabIndex')).toEqual('-1');
      expect(document.activeElement).toEqual(heading);
    });
  });

  describe('Unfocuses the heading on blur', () => {
    it('if skiplink and heading elements exist', () => {
      initTest(skipLinkHtml + headingHtml);
      expect(skipLink).toBeDefined();
      expect(heading).toBeDefined();

      skipLink.click();

      expect(heading.getAttribute('tabIndex')).toEqual('-1');
      expect(document.activeElement).toEqual(heading);

      heading.blur();

      expect(heading.getAttribute('tabIndex')).toBeNull();
      expect(document.activeElement).not.toEqual(heading);
    });
  });

  describe('Is initialised by nhsuk.js', () => {

  });
});
