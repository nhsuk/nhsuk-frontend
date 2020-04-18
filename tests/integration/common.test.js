import {
  toggleAttribute,
  toggleClass,
  addClass,
  toggleConditionalInput,
} from '../../packages/common';

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

describe('addClass util', () => {
  const className = 'test-class';
  let testElement;

  beforeEach(() => {
    document.body.innerHTML = '<div class="nhsuk-test" />';
    testElement = document.querySelector('.nhsuk-test');
  });

  describe('does not throw an error', () => {
    it('if the element does not exist', () => {
      const undefinedElement = document.querySelector('.nhs-false-element');
      expect(undefinedElement).toBeNull();
      addClass(undefinedElement, 'test-class');
    });
  });

  describe('adds class', () => {
    it('if the class does not already exist on the element', () => {
      expect(testElement).not.toBeNull();
      addClass(testElement, className);
      expect(testElement.classList.contains(className)).toEqual(true);
    });
  });

  describe('does not add class', () => {
    it('if the class already exists on the element', () => {
      expect(testElement).not.toBeNull();
      addClass(testElement, 'nhsuk-test');
      expect(testElement.className).toEqual('nhsuk-test');
    });
  });
});

describe('toggleConditionalInput util', () => {
  describe('does not throw an error', () => {
    beforeEach(() => {
      document.body.innerHTML = '<input class="nhsuk-input"/>';
    });

    it('if the element does not exist', () => {
      const undefinedElement = document.querySelector('.nhs-false-element');
      expect(undefinedElement).toBeNull();
      toggleConditionalInput(undefinedElement, 'test-class');
    });

    it('if no class is passed', () => {
      const undefinedElement = document.querySelector('.nhs-false-element');
      expect(undefinedElement).toBeNull();
      toggleConditionalInput(undefinedElement);
    });

    it('if the input has no aria-controls', () => {
      const input = document.querySelector('.nhsuk-input');
      expect(input).not.toBeNull();
      toggleConditionalInput(input, 'test-class');
    });

    it('if the input has an invalid aria-controls', () => {
      document.body.innerHTML = '<input class="nhsuk-input" aria-controls="fake-id" />';
      const input = document.querySelector('.nhsuk-input');
      expect(input).not.toBeNull();
      toggleConditionalInput(input, 'test-class');
    });
  });

  describe('toggles the passed class', () => {
    it('if the aria-controls element is valid and content is hidden', () => {
      document.body.innerHTML = '<input aria-controls="content" aria-expanded="false" /><div class="hidden" id="content"></div>';
      const input = document.querySelector('input');
      const content = document.querySelector('div');
      expect(input).not.toBeNull();
      expect(content).not.toBeNull();
      toggleConditionalInput(input, 'hidden');
      expect(content.classList.contains('hidden')).toEqual(false);
      expect(input.getAttribute('aria-expanded')).toEqual('true');
      toggleConditionalInput(input, 'hidden');
      expect(content.classList.contains('hidden')).toEqual(true);
      expect(input.getAttribute('aria-expanded')).toEqual('false');
    });

    it('if the aria-controls element is valid and content is not hidden', () => {
      document.body.innerHTML = '<input aria-controls="content" aria-expanded="true" /><div id="content"></div>';
      const input = document.querySelector('input');
      const content = document.querySelector('div');
      expect(input).not.toBeNull();
      expect(content).not.toBeNull();
      toggleConditionalInput(input, 'hidden');
      expect(content.classList.contains('hidden')).toEqual(true);
      expect(input.getAttribute('aria-expanded')).toEqual('false');
      toggleConditionalInput(input, 'hidden');
      expect(content.classList.contains('hidden')).toEqual(false);
      expect(input.getAttribute('aria-expanded')).toEqual('true');
    });
  });
});
