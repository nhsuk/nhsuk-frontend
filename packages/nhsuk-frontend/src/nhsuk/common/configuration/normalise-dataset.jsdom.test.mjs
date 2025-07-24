import { ConfigurableComponent } from '../../configurable-component.mjs'

import { normaliseDataset } from './index.mjs'

describe('normaliseDataset', () => {
  it('normalises the entire dataset', () => {
    expect(
      normaliseDataset(
        /**
         * @augments ConfigurableComponent<Config>
         */
        class Component extends ConfigurableComponent {
          static moduleName = 'Component'

          /**
           * @satisfies {Schema<Config>}
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
           * @satisfies {Config}
           */
          static defaults = {
            aNumber: 0,
            aDecimalNumber: 0,
            aBoolean: false,
            aString: '',
            aStringBoolean: 'true',
            aStringNumber: '0'
          }
        },
        {
          aNumber: '1000',
          aDecimalNumber: '100.50',
          aBoolean: 'true',
          aString: 'Hello!',
          aStringBoolean: 'false',
          aStringNumber: '2024',
          anOptionalString: ''
        }
      )
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
})

/**
 * @typedef {object} Config
 * @property {number} aNumber - A number
 * @property {number} aDecimalNumber - A decimal number
 * @property {boolean} aBoolean - A boolean
 * @property {string} aString - A string
 * @property {'true' | 'false'} aStringBoolean - A string boolean
 * @property {string} aStringNumber - A string number
 * @property {string} [anOptionalString] - An optional string
 */

/**
 * @import { Schema } from '../../configurable-component.mjs'
 */
