import { toggleConditionalInput } from '../../common';

/**
 * Conditionally show content when a checkbox button is checked
 * Test at http://0.0.0.0:3000/components/checkboxes/conditional.html
*/

export default () => {
  // Checkbox input DOMElements inside a conditional form group
  const checkboxInputs = document.querySelectorAll('.nhsuk-checkboxes--conditional .nhsuk-checkboxes__input');

  /**
   * Toggle classes and attributes
   * @param {Object} event click event object
  */
  const handleClick = (event) => {
    // Toggle conditional content based on checked state
    toggleConditionalInput(event.target, 'nhsuk-checkboxes__conditional--hidden');
  };

  // Attach handleClick as click to checkboxInputs
  checkboxInputs.forEach((checkboxButton) => {
    checkboxButton.addEventListener('change', handleClick);
  });
};
