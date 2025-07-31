import { ConfigurableComponent } from '../../configurable-component.mjs'

import { normaliseDataset } from './index.mjs'

describe('normaliseDataset', () => {
  it('normalises the entire dataset', () => {
    expect(
      normaliseDataset(
        /**
         * @augments ConfigurableComponent<MockConfig>
         */
        class Component extends ConfigurableComponent {
          static moduleName = 'Component'

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
              anObject: { type: 'object' }
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
            }
          }
        },
        {
          'aNumber': '1000',
          'aDecimalNumber': '100.50',
          'aBoolean': 'true',
          'aString': 'Hello!',
          'aStringBoolean': 'false',
          'aStringNumber': '2024',
          'anOptionalString': '',
          'anObject.one': '111',
          'anObject.two': '222',
          'anObject.three': '333'
        }
      )
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
      }
    })
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
 */

/**
 * @import { Schema } from './index.mjs'
 */
