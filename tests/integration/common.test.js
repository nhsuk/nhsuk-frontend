import {
  getClasses,
  hasClass,
  toggleAttribute,
  toggleClass,
  addClass,
  removeClass,
  toggleConditionalInput,
} from '../../packages/common';

describe('getClasses util', () => {
  describe('returns an empty array', () => {
    it('if the element does not exist', () => {
      const element = document.querySelector('.fake-class');
      expect(element).toBeNull();
      expect(getClasses(element)).toEqual([]);
    });

    it('if the element does not have any classes', () => {
      document.body.innerHTML = '<div />';
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      expect(getClasses(element)).toEqual([]);
    });
  });

  describe('returns an array of classes', () => {
    it('if the element has one class', () => {
      document.body.innerHTML = '<div class="example1" />';
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      expect(getClasses(element)).toEqual(['example1']);
    });

    it('if the element has multiple classes', () => {
      document.body.innerHTML = '<div class="example1 example2 example3" />';
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      expect(getClasses(element)).toEqual(['example1', 'example2', 'example3']);
    });

    it('if the element has multiple classes with varying whitespace', () => {
      document.body.innerHTML = '<div class="   example1  example2    example3 " />';
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      expect(getClasses(element)).toEqual(['example1', 'example2', 'example3']);
    });
  });
});

describe('hasClass util', () => {
  const className = 'test-class';

  describe('returns false', () => {
    it('if the element does not exist', () => {
      const element = document.querySelector('.fake-class');
      expect(element).toBeNull();
      expect(hasClass(element, className)).toEqual(false);
    });

    it('if the element does not have the class', () => {
      document.body.innerHTML = '<div />';
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      expect(hasClass(element, className)).toEqual(false);
    });
  });

  describe('returns true', () => {
    it('if the element has the class', () => {
      document.body.innerHTML = `<div class="${className}" />`;
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      expect(hasClass(element, className)).toEqual(true);
    });
  });
});

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

describe('toggleClass util', () => {
  const className = 'test-class';

  describe('does not throw an error', () => {
    it('if the element does not exist', () => {
      const element = document.querySelector('.fake-class');
      expect(element).toBeNull();
      toggleClass(element, 'test-class');
    });
  });

  describe('Adds class', () => {
    it('if the class does not already exist on the element', () => {
      document.body.innerHTML = '<div />';
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      toggleClass(element, className);
      expect(element.classList.contains(className)).toEqual(true);
    });
  });

  describe('Removes class', () => {
    it('if the class already exists on the element', () => {
      document.body.innerHTML = `<div class="${className}" />`;
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      toggleClass(element, className);
      expect(element.classList.contains(className)).toEqual(false);
    });
  });
});

describe('addClass util', () => {
  const className = 'test-class';

  describe('does not throw an error', () => {
    it('if the element does not exist', () => {
      const element = document.querySelector('.fake-class');
      expect(element).toBeNull();
      addClass(element, className);
    });
  });

  describe('adds class', () => {
    it('if the element has no classes', () => {
      document.body.innerHTML = '<div />';
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      addClass(element, className);
      expect(element.className).toEqual('test-class');
    });

    it('if the class does not already exist on the element', () => {
      document.body.innerHTML = '<div class="exisiting-class" />';
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      addClass(element, className);
      expect(element.className).toEqual(`exisiting-class ${className}`);
    });
  });

  describe('does not add class', () => {
    it('if the class already exists on the element', () => {
      document.body.innerHTML = `<div class="${className}" />`;
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      addClass(element, className);
      expect(element.className).toEqual(className);
    });

    it('if the class if one of multiple that already exists on the element', () => {
      document.body.innerHTML = `<div class="exisiting-class ${className}" />`;
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      addClass(element, className);
      expect(element.className).toEqual(`exisiting-class ${className}`);
    });
  });
});

describe('removeClass util', () => {
  const className = 'test-class';

  describe('does not throw an error', () => {
    it('if the element does not exist', () => {
      const element = document.querySelector('.fake-class');
      expect(element).toBeNull();
      removeClass(element, className);
    });

    it('if the element has no classes', () => {
      document.body.innerHTML = '<div />';
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      removeClass(element, className);
      expect(element.className).toEqual('');
    });
  });

  describe('removes the class', () => {
    it('if the class is on the element', () => {
      document.body.innerHTML = `<div class="${className}" />`;
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      removeClass(element, className);
      expect(element.className).toEqual('');
    });

    it('if the class if one of multiple that is on the element', () => {
      document.body.innerHTML = `<div class="exisiting-class ${className}" />`;
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      removeClass(element, className);
      expect(element.className).toEqual('exisiting-class');
    });
  });

  describe('does not remove class', () => {
    it('if the class is not on the element', () => {
      document.body.innerHTML = `<div class="${className}" />`;
      const element = document.querySelector('div');
      expect(element).not.toBeNull();
      addClass(element, className);
      expect(element.className).toEqual(className);
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
      toggleConditionalInput(input, 'hidden');
      expect(content.classList.contains('hidden')).toEqual(false);
      expect(input.getAttribute('aria-expanded')).toEqual('true');
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
      toggleConditionalInput(input, 'hidden');
      expect(content.classList.contains('hidden')).toEqual(true);
      expect(input.getAttribute('aria-expanded')).toEqual('false');
      toggleConditionalInput(input, 'hidden');
      expect(content.classList.contains('hidden')).toEqual(false);
      expect(input.getAttribute('aria-expanded')).toEqual('true');
    });
  });
});
