import { toggleConditionalInput, addClass } from '../../common';

/*
* NHS.UK radio buttons.
*
* Conditionally show content when a radio button is checked
*/

export default () => {
  // All radio inputs inside a conditional form group
  const radioInputs = document.querySelectorAll('.nhsuk-radios--conditional .nhsuk-radios__input');
  // All conditional content inside a conditional form group
  const conditionalInputs = document.querySelectorAll('.nhsuk-radios--conditional .nhsuk-radios__conditional');

  // Add event listener to every radio button
  Array.prototype.slice.call(radioInputs).forEach((radioButton) => {
    radioButton.addEventListener('change', (e) => {
      // Hide all conditional content on all input clicks
      radioInputs.forEach((input) => input.setAttribute('aria-expanded', 'false'));
      Array.prototype.slice.call(conditionalInputs).forEach((input) => addClass(input, 'nhsuk-radios__conditional--hidden'));
      // Toggle conditional content based on checked state
      toggleConditionalInput(e.target, 'nhsuk-radios__conditional--hidden');
    });
  });
};
