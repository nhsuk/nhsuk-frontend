import { normaliseDataset } from './index.mjs'

import {
  MockComponent,
  MockConfigurableComponent
} from '#lib/fixtures/configuration/mock-component.mjs'

describe('normaliseDataset', () => {
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

  it('returns empty object when component schema is not defined', () => {
    expect(normaliseDataset(MockComponent, {})).toEqual({})
  })
})
