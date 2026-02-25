import { Component } from '../../../component.mjs'
import { ConfigurableComponent } from '../../../configurable-component.mjs'

export class MockComponent extends Component {
  static moduleName = 'mock-component'

  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root)
    this.args = [$root]
  }
}

export class MockComponentError extends MockComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root)

    if ('boom' in this.$root.dataset) {
      throw new Error('Error thrown from constructor')
    }
  }
}

/**
 * @augments {ConfigurableComponent<MockConfig>}
 */
export class MockConfigurableComponent extends ConfigurableComponent {
  static moduleName = 'mock-component'

  /**
   * @satisfies {Schema<MockConfig>}
   */
  static schema = {
    properties: {
      aNumber: { type: 'number' },
      aDecimalNumber: { type: 'number' },
      aBoolean: { type: 'boolean' },
      aString: { type: 'string' },
      aStringBoolean: { type: 'string' },
      aStringNumber: { type: 'string' },
      anOptionalString: { type: 'string' },
      anObject: { type: 'object' },
      anArray1: { type: 'array' },
      anArray2: { type: 'array' },
      anArray3: { type: 'array' },
      anArray4: { type: 'array' }
    }
  }

  /**
   * @satisfies {MockConfig}
   */
  static defaults = {
    aNumber: 0,
    aDecimalNumber: 0,
    aBoolean: false,
    aString: '',
    aStringBoolean: 'true',
    aStringNumber: '0',
    anObject: {
      one: '100',
      two: '200',
      three: '300'
    },
    anArray1: [],
    anArray2: [true],
    anArray3: [1, 2, 3, 4],
    anArray4: ['goose', 'gull', 'gannet']
  }
}

/**
 * @augments {ConfigurableComponent<MockConfigBoolean>}
 */
export class MockConfigurableComponentBoolean extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<MockConfigBoolean>} [config] - Component config
   */
  constructor($root, config) {
    super($root, config)
    this.args = [$root, config]
  }

  static moduleName = 'mock-component'

  /**
   * @satisfies {Schema<MockConfigBoolean>}
   */
  static schema = {
    properties: {
      example: { type: 'boolean' }
    }
  }

  /**
   * @satisfies {MockConfigBoolean}
   */
  static defaults = {
    example: false
  }
}

/**
 * @augments {ConfigurableComponent<MockConfigNumber>}
 */
export class MockConfigurableComponentNumber extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<MockConfigNumber>} [config] - Component config
   */
  constructor($root, config) {
    super($root, config)
    this.args = [$root, config]
  }

  static moduleName = 'mock-component'

  /**
   * @satisfies {Schema<MockConfigNumber>}
   */
  static schema = {
    properties: {
      example: { type: 'number' }
    }
  }

  /**
   * @satisfies {MockConfigNumber}
   */
  static defaults = {
    example: 0
  }
}

export class MockConfigurableComponentNoSchema extends ConfigurableComponent {
  static moduleName = 'mock-component'

  static defaults = {
    example: 0
  }
}

export class MockConfigurableComponentNoDefaults extends ConfigurableComponent {
  static moduleName = 'mock-component'

  static schema = {
    properties: {
      example: { type: 'number' }
    }
  }
}

/**
 * @augments {ConfigurableComponent<MockConfigOptional>}
 */
export class MockConfigurableComponentAnyOf extends ConfigurableComponent {
  static moduleName = 'mock-component'

  /**
   * @satisfies {Schema<MockConfigOptional>}
   */
  static schema = {
    properties: {
      example1: { type: 'string' },
      example2: { type: 'string' },
      example3: { type: 'number' },
      example4: { type: 'boolean' }
    },
    anyOf: [
      {
        required: ['example1', 'example2'],
        errorMessage: '"example1" and "example2" must be provided'
      },
      {
        required: ['example3'],
        errorMessage: '"example3" must be provided'
      },
      {
        required: ['example4'],
        errorMessage: '"example4" must be provided'
      }
    ]
  }

  /**
   * @satisfies {MockConfigOptional}
   */
  static defaults = {
    example1: '',
    example2: '',
    example3: 0,
    example4: false
  }
}

/**
 * @typedef {object} MockConfig
 * @property {number} aNumber - A number
 * @property {number} aDecimalNumber - A decimal number
 * @property {boolean} aBoolean - A boolean
 * @property {string} aString - A string
 * @property {'true' | 'false'} aStringBoolean - A string boolean
 * @property {string} aStringNumber - A string number
 * @property {string} [anOptionalString] - An optional string
 * @property {{ one: string, two: string, three: string }} anObject - An object
 * @property {(string | number | boolean)[]} anArray1 - An array
 * @property {(string | number | boolean)[]} anArray2 - An array
 * @property {(string | number | boolean)[]} anArray3 - An array
 * @property {(string | number | boolean)[]} anArray4 - An array
 */

/**
 * @typedef {object} MockConfigBoolean
 * @property {boolean} example - Example boolean
 */

/**
 * @typedef {object} MockConfigNumber
 * @property {number} example - Example number
 */

/**
 * @typedef {object} MockConfigOptional
 * @property {string} [example1] - Example string
 * @property {string} [example2] - Example string
 * @property {number} [example3] - Example number
 * @property {boolean} [example4] - Example boolean
 */

/**
 * @import { Schema } from '../../../common/configuration/index.mjs'
 */
