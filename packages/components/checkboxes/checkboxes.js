import { toggleConditionalInput } from '../../common';

/**
 * Conditionally show content when a checkbox button is checked
 * Test at http://0.0.0.0:3000/components/checkboxes/conditional.html
*/

const syncAllConditionalReveals = function syncAllConditionalReveals(input) {
  const allInputsWithSameName = document.querySelectorAll(`input[type="checkbox"][name="${input.name}"]`);
  Array.from(allInputsWithSameName).map((item) => toggleConditionalInput(item, 'nhsuk-checkboxes__conditional--hidden'));
};

/**
 * Uncheck other checkboxes
 *
 * Find any other checkbox inputs with the same name value, and uncheck them.
 * This is useful for when a “None of these" checkbox is checked.
 */
const unCheckAllInputsExcept = function unCheckAllInputsExcept(input) {
  const allInputsWithSameName = document.querySelectorAll(`input[type="checkbox"][name="${input.name}"]`);

  allInputsWithSameName.forEach((inputWithSameName) => {
    const hasSameFormOwner = input.form === inputWithSameName.form;
    if (hasSameFormOwner && inputWithSameName !== input) {
      inputWithSameName.checked = false; // eslint-disable-line no-param-reassign
    }
  });

  syncAllConditionalReveals(input);
};

/**
 * Uncheck exclusive inputs
 *
 * Find any checkbox inputs with the same name value and the 'exclusive' behaviour,
 * and uncheck them. This helps prevent someone checking both a regular checkbox and a
 * "None of these" checkbox in the same fieldset.
 */
const unCheckExclusiveInputs = function unCheckExclusiveInputs(input) {
  const allInputsWithSameNameAndExclusiveBehaviour = document.querySelectorAll(
    `input[data-behaviour="exclusive"][type="checkbox"][name="${input.name}"]`
  );

  allInputsWithSameNameAndExclusiveBehaviour.forEach((exclusiveInput) => {
    const hasSameFormOwner = input.form === exclusiveInput.form;
    if (hasSameFormOwner) {
      exclusiveInput.checked = false; // eslint-disable-line no-param-reassign
    }
  });

  syncAllConditionalReveals(input);
};

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

    if (!event.target.checked) {
      return;
    }

    // Handle 'exclusive' checkbox behaviour (ie "None of these")
    if (event.target.getAttribute('data-behaviour') === 'exclusive') {
      unCheckAllInputsExcept(event.target);
    } else {
      unCheckExclusiveInputs(event.target);
    }
  };

  // Attach handleClick as click to checkboxInputs
  checkboxInputs.forEach((checkboxButton) => {
    checkboxButton.addEventListener('change', handleClick);
  });
};
