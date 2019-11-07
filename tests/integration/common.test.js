import { toggleAttribute, toggleClass } from '../../packages/common';

describe('toggleAttribute util', () => {
  const attr = 'aria-expanded';
  let testElement;

  beforeEach(() => {
    document.body.innerHTML = '<div class="nhsuk-test" />';
    testElement = document.querySelector('.nhsuk-test');
  });

  describe('Does not throw an error', () => {
    it('if the element does not exist', () => {
      const undefinedElement = document.querySelector('.nhs-false-element');
      expect(undefinedElement).toBeNull();
      toggleAttribute(undefinedElement, 'aria-expanded');
    });
  });

  describe('Adds attribute with value of "true"', () => {
    it('if the element currently has no attribute', () => {
      expect(testElement).toBeDefined();
      toggleAttribute(testElement, attr);
      expect(testElement.getAttribute(attr)).toEqual('true');
    });

    it('if the attributes current value is "false"', () => {
      document.body.innerHTML = `<div class="nhsuk-test" ${attr}="false" />`;
      expect(testElement).toBeDefined();
      toggleAttribute(testElement, attr);
      expect(testElement.getAttribute(attr)).toEqual('true');
    });
  });

  describe('Adds attribute with value of "false"', () => {
    it('if the attributes current value is "true"', () => {
      document.body.innerHTML = `<div class="nhsuk-test" ${attr}="true" />`;
      testElement = document.querySelector('.nhsuk-test');
      expect(testElement).toBeDefined();
      toggleAttribute(testElement, attr);
      expect(testElement.getAttribute(attr)).toEqual('false');
    });
  });
});

describe('toggleClass util', () => {
  const className = 'test-class';
  let testElement;

  beforeEach(() => {
    document.body.innerHTML = '<div class="nhsuk-test" />';
    testElement = document.querySelector('.nhsuk-test');
  });

  describe('Does not throw an error', () => {
    it('if the element does not exist', () => {
      const undefinedElement = document.querySelector('.nhs-false-element');
      expect(undefinedElement).toBeNull();
      toggleClass(undefinedElement, 'test-class');
    });
  });

  describe('Adds class', () => {
    it('if the class does not already exist on the element', () => {
      expect(testElement).toBeDefined();
      toggleClass(testElement, className);
      expect(testElement.classList.contains(className)).toEqual(true);
    });
  });

  describe('Removes class', () => {
    it('if the class already exists on the element', () => {
      document.body.innerHTML = `<div class="nhsuk-test ${className}" />`;
      testElement = document.querySelector('.nhsuk-test');
      expect(testElement).toBeDefined();
      toggleClass(testElement, className);
      expect(testElement.classList.contains(className)).toEqual(false);
    });
  });
});
