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
        anOptionalString: { type: 'string' }
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
      aStringNumber: '0'
    }
  }

  it('normalises the entire dataset', () => {
    expect(
      normaliseDataset(MockConfigurableComponent, {
        aNumber: '1000',
        aDecimalNumber: '100.50',
        aBoolean: 'true',
        aString: 'Hello!',
        aStringBoolean: 'false',
        aStringNumber: '2024',
        anOptionalString: ''
      })
    ).toEqual({
      aNumber: 1000,
      aDecimalNumber: 100.5,
      aBoolean: true,
      aString: 'Hello!',
      aStringBoolean: 'false',
      aStringNumber: '2024',
      anOptionalString: ''
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
 */

/**
 * @import { Schema } from './index.mjs'
 */
