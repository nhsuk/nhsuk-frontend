import { toggleAttribute, toggleClass } from './common';

// DOM Elements to be set
let testElement;
const undefinedElement = document.querySelector('.nhs-false-element');

// Helper to set DOM Elements
const initTest = (html = '<div class="nhsuk-test" />') => {
  document.body.innerHTML = html;
  testElement = document.querySelector('.nhsuk-test');
};

describe('toggleAttribute util', () => {
  describe('Does not throw an error', () => {
    it('if the element does not exist', () => {
      initTest('');
      expect(undefinedElement).toBeNull();
      toggleAttribute(document.querySelector('.nhs-false-element'), 'aria-expanded');
    });
  });

  describe('Adds attribute with value of "true"', () => {
    const attr = 'aria-expanded';

    it('if the element currently has no attribute', () => {
      initTest();
      expect(testElement).toBeDefined();
      toggleAttribute(testElement, attr);
      expect(testElement.getAttribute(attr)).toEqual('true');
    });

    it('if the attributes current value is "false"', () => {
      initTest(`<div class="nhsuk-test" ${attr}="false" />`);
      expect(testElement).toBeDefined();
      toggleAttribute(testElement, attr);
      expect(testElement.getAttribute(attr)).toEqual('true');
    });
  });

  describe('Adds attribute with value of "false"', () => {
    const attr = 'aria-expanded';

    it('if the attributes current value is "true"', () => {
      initTest(`<div class="nhsuk-test" ${attr}="true" />`);
      expect(testElement).toBeDefined();
      toggleAttribute(testElement, attr);
      expect(testElement.getAttribute(attr)).toEqual('false');
    });
  });
});

describe('toggleClass util', () => {
  const className = 'test-class';

  describe('Does not throw an error', () => {
    it('if the element does not exist', () => {
      initTest('');
      expect(undefinedElement).toBeNull();
      toggleClass(undefinedElement, 'test-class');
    });
  });

  describe('Adds class', () => {
    it('if the class does not already exist on the element', () => {
      initTest();
      expect(testElement).toBeDefined();
      toggleClass(testElement, className);
      expect(testElement.classList.contains(className)).toEqual(true);
    });
  });

  describe('Removes class', () => {
    it('if the class already exists on the element', () => {
      initTest(`<div class="nhsuk-test ${className}" />`);
      expect(testElement).toBeDefined();
      toggleClass(testElement, className);
      expect(testElement.classList.contains(className)).toEqual(false);
    });
  });
});
