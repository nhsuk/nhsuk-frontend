import {
  toggleAttribute,
  toggleConditionalInput,
} from '../../packages/common';

describe('toggleAttribute util', () => {
  const attr = 'test-attribute';

  describe('does not throw an error', () => {
    it('if the element does not exist', () => {
      const element = document.querySelector('.fake-class');
      expect(element).toBeNull();
      toggleAttribute(element, attr);
    });
  });

  describe('adds attribute with value of "true"', () => {
    it('if the element currently has no attribute', () => {
      document.body.innerHTML = '<div />';
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      toggleAttribute(element, attr);
      expect(element.getAttribute(attr)).toEqual('true');
    });

    it('if the attributes current value is "false"', () => {
      document.body.innerHTML = `<div ${attr}="false" />`;
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      toggleAttribute(element, attr);
      expect(element.getAttribute(attr)).toEqual('true');
    });
  });

  describe('Adds attribute with value of "false"', () => {
    it('if the attributes current value is "true"', () => {
      document.body.innerHTML = `<div ${attr}="true" />`;
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      toggleAttribute(element, attr);
      expect(element.getAttribute(attr)).toEqual('false');
    });
  });
});

describe('toggleConditionalInput util', () => {
  const className = 'test-class';

  describe('does not throw an error', () => {
    it('if the element does not exist', () => {
      const element = document.querySelector('.fake-class');
      expect(element).toBeNull();
      toggleConditionalInput(element, className);
    });

    it('if no class is passed', () => {
      const element = document.querySelector('.fake-class');
      expect(element).toBeNull();
      toggleConditionalInput(element);
    });

    it('if the input has no aria-controls', () => {
      document.body.innerHTML = '<input />';
      const input = document.querySelector('input');
      expect(input).not.toBeNull();
      toggleConditionalInput(input, className);
    });

    it('if the input has an invalid aria-controls', () => {
      document.body.innerHTML = '<input aria-controls="fake-id" />';
      const input = document.querySelector('input');
      expect(input).not.toBeNull();
      toggleConditionalInput(input, className);
    });
  });

  describe('toggles the passed class', () => {
    it('if the aria-controls element is valid and content is hidden', () => {
      document.body.innerHTML = '<input aria-controls="content" aria-expanded="false" /><div class="hidden" id="content" />';
      const input = document.querySelector('input');
      const content = document.querySelector('div');
      expect(input).not.toBeNull();
      expect(content).not.toBeNull();
      input.checked = true;
      toggleConditionalInput(input, 'hidden');
      expect(content.classList.contains('hidden')).toEqual(false);
      expect(input.getAttribute('aria-expanded')).toEqual('true');
      input.checked = false;
      toggleConditionalInput(input, 'hidden');
      expect(content.classList.contains('hidden')).toEqual(true);
      expect(input.getAttribute('aria-expanded')).toEqual('false');
    });

    it('if the aria-controls element is valid and content is not hidden', () => {
      document.body.innerHTML = '<input aria-controls="content" aria-expanded="true" /><div id="content" />';
      const input = document.querySelector('input');
      const content = document.querySelector('div');
      expect(input).not.toBeNull();
      expect(content).not.toBeNull();
      input.checked = false;
      toggleConditionalInput(input, 'hidden');
      expect(content.classList.contains('hidden')).toEqual(true);
      expect(input.getAttribute('aria-expanded')).toEqual('false');
      input.checked = true;
      toggleConditionalInput(input, 'hidden');
      expect(content.classList.contains('hidden')).toEqual(false);
      expect(input.getAttribute('aria-expanded')).toEqual('true');
    });
  });
});
