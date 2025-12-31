import { Component } from '../../component.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'

import { normaliseDataset } from './index.mjs'

describe('normaliseDataset', () => {
  class MockComponent extends Component {
    constructor($root) {
      super($root)
      this.args = [$root]
    }
  }

  /**
   * @augments ConfigurableComponent<MockConfig>
   */
  class MockConfigurableComponent extends ConfigurableComponent {
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

  it('normalises the entire dataset', () => {
    expect(
      normaliseDataset(MockConfigurableComponent, {
        'aNumber': '1000',
        'aDecimalNumber': '100.50',
        'aBoolean': 'true',
        'aString': 'Hello!',
        'aStringBoolean': 'false',
        'aStringNumber': '2024',
        'anOptionalString': '',
        'anObject.one': '111',
        'anObject.two': '222',
        'anObject.three': '333',
        'anArray1': '[]',
        'anArray2': '[true]',
        'anArray3': '[1, 2, 3, 4]',
        'anArray4': '["goose", "gull", "gannet"]'
      })
    ).toEqual({
      aNumber: 1000,
      aDecimalNumber: 100.5,
      aBoolean: true,
      aString: 'Hello!',
      aStringBoolean: 'false',
      aStringNumber: '2024',
      anOptionalString: '',
      anObject: {
        one: 111,
        two: 222,
        three: 333
      },
      anArray1: [],
      anArray2: [true],
      anArray3: [1, 2, 3, 4],
      anArray4: ['goose', 'gull', 'gannet']
    })
  })

  it('throws when component schema is not defined', () => {
    expect(() => normaliseDataset(MockComponent, {})).toThrow(
      `${MockComponent.moduleName}: Config passed as parameter into constructor but no schema defined`
    )
  })
})

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
 * @import { Schema } from './index.mjs'
 */
