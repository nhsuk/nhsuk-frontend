import { validateConfig } from './validate-config.mjs'

import { MockConfigurableComponentAnyOf } from '#lib/fixtures/configuration/mock-component.mjs'

describe('validateConfig', () => {
  describe("schema 'anyOf' validation", () => {
    it.each([
      {
        config: {},
        expected: [
          '"example1" and "example2" must be provided',
          '"example3" must be provided',
          '"example4" must be provided'
        ]
      },
      {
        config: {
          example1: 'example1'
        },
        expected: [
          '"example1" and "example2" must be provided',
          '"example3" must be provided',
          '"example4" must be provided'
        ]
      },
      {
        config: {
          example2: 'example2'
        },
        expected: [
          '"example1" and "example2" must be provided',
          '"example3" must be provided',
          '"example4" must be provided'
        ]
      },
      {
        config: {
          example3: 100
        },
        expected: []
      },
      {
        config: {
          example4: true
        },
        expected: []
      },
      {
        config: {
          example3: 100,
          example4: true
        },
        expected: []
      },
      {
        config: {
          example1: 'example1',
          example2: 'example2',
          example3: 100,
          example4: true
        },
        expected: []
      }
    ])('returns errors unless any schema passes', ({ config, expected }) => {
      const errors = validateConfig(
        MockConfigurableComponentAnyOf.schema,
        config
      )

      expect(errors).toEqual(expected)
    })
  })
})
