import { toggleConditionalInput } from '../../common';

/*
* NHS.UK checkbox buttons.
*
* Conditionally show content when a checkbox button is checked
*/

export default () => {
  // All checkbox inputs inside a conditional form group
  const checkboxInputs = document.querySelectorAll('.nhsuk-checkboxes--conditional .nhsuk-checkboxes__input');

  // Add event listener to every checkbox button
  Array.prototype.slice.call(checkboxInputs).forEach((checkboxButton) => {
    checkboxButton.addEventListener('change', (e) => {
      // Toggle conditional content based on checked state
      toggleConditionalInput(e.target, 'nhsuk-checkboxes__conditional--hidden');
    });
  });
};
