import { getByRole, getByText } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

import { examples } from './fixtures.mjs'
import { StepperInput, initStepperInputs } from './stepper-input.mjs'

import { components } from '#lib'

const user = userEvent.setup()

describe('Stepper input', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLElement} */
  let $stepUpButton

  /** @type {HTMLElement} */
  let $stepDownButton

  /** @type {HTMLInputElement} */
  let $input

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = components.render(
      'stepper-input',
      examples[example]
    )

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${StepperInput.moduleName}"]`)
    )

    $stepUpButton = getByText(document.body, 'Increase').parentElement
    $stepDownButton = getByText(document.body, 'Decrease').parentElement
    $input = getByRole($root, 'textbox', {
      name: 'How many images were taken?'
    })
  }

  beforeEach(() => {
    initExample('with button text')
  })

  it('shows buttons when javascript is enabled', async () => {
    expect($stepUpButton).toHaveAttribute('hidden')
    expect($stepDownButton).toHaveAttribute('hidden')

    initStepperInputs()

    expect($stepUpButton).not.toHaveAttribute('hidden')
    expect($stepDownButton).not.toHaveAttribute('hidden')
  })

  it('steps up when the button is clicked', async () => {
    initStepperInputs()
    expect($input).toHaveValue(2)

    await user.click($stepUpButton)

    expect($input).toHaveValue(3)
  })

  it('steps down when the button is clicked', async () => {
    initStepperInputs()
    expect($input).toHaveValue(2)

    await user.click($stepDownButton)

    expect($input).toHaveValue(1)
  })

  it('announces the change after buttons are clicked', async () => {
    initStepperInputs()

    const liveRegion = /** @type {HTMLElement} */ (
      document.querySelector("[aria-live='polite']")
    )

    await user.click($stepUpButton)
    expect(liveRegion.innerText).toBe('3')
    await user.click($stepDownButton)
    expect(liveRegion.innerText).toBe('2')
  })

  it('assumes the min value when stepping down if the input is empty', async () => {
    initStepperInputs()
    $input.value = ''

    await user.click($stepDownButton)

    expect($input).toHaveValue(0)
  })

  it('starts from 1 when stepping up if the input is empty and min is 0', async () => {
    initStepperInputs()
    $input.value = ''

    await user.click($stepUpButton)

    expect($input).toHaveValue(1)
  })
})
