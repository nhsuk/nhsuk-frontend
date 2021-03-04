import { toggleConditionalInput } from '../../common';

/**
 * Conditionally show content when a radio button is checked
 * Test at http://0.0.0.0:3000/components/radios/conditional.html
*/

export default () => {
  // Radio input HTMLElements inside a conditional form group
  const radioInputs = document.querySelectorAll('.nhsuk-radios--conditional .nhsuk-radios__input');
  // Conditional content inside a conditional form group
  const conditionalInputs = document.querySelectorAll('.nhsuk-radios--conditional .nhsuk-radios__conditional');

  /**
   * Toggle classes and attributes
   * @param {Object} event click event object
  */
  const handleClick = (event) => {
    // Hide all conditional content on all input clicks
    radioInputs.forEach((input) => input.setAttribute('aria-expanded', 'false'));
    conditionalInputs.forEach((input) => input.classList.add('nhsuk-radios__conditional--hidden'));
    // Toggle conditional content based on checked state
    toggleConditionalInput(event.target, 'nhsuk-radios__conditional--hidden');
  };

  // Attach handleClick as click to radioInputs
  radioInputs.forEach((radioButton) => {
    radioButton.addEventListener('change', handleClick);
  });
};
