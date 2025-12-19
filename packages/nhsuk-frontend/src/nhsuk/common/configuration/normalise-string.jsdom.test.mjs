import { normaliseString } from './normalise-string.mjs'

describe('normaliseString', () => {
  it.each([
    {
      name: '"true" to boolean true',
      input: 'true',
      output: true
    },
    {
      name: '" true " to boolean true',
      input: ' true ',
      output: true
    },
    {
      name: '"false" to boolean false',
      input: 'false',
      output: false
    },
    {
      name: '" false " to boolean false',
      input: ' false ',
      output: false
    },
    {
      name: '"0" to the number 0',
      input: '0',
      output: 0
    },
    {
      name: 'representing positive number to number',
      input: '1337',
      output: 1337
    },
    {
      name: 'representing negative number to number',
      input: '-1337',
      output: -1337
    },
    {
      name: 'representing decimal numbers to numbers',
      input: '0.5',
      output: 0.5
    },
    {
      name: 'representing decimal numbers with extra precision to numbers',
      input: '100.500',
      output: 100.5
    },
    {
      name: 'representing decimal numbers with no integer-part to numbers',
      input: '.5',
      output: 0.5
    },
    {
      name: 'representing numbers with whitespace to numbers',
      input: '   1337   ',
      output: 1337
    },
    {
      name: 'normalises strings that represent very big positive numbers to numbers',
      input: `${Number.MAX_SAFE_INTEGER + 1}`,
      output: Number.MAX_SAFE_INTEGER + 1
    }
  ])('normalises string $name', ({ input, output }) => {
    expect(normaliseString(input)).toBe(output)
  })

  it.each([
    {
      name: 'undefined value',
      input: undefined,
      output: undefined
    },
    {
      name: 'empty string',
      input: '',
      output: ''
    },
    {
      name: 'whitespace only string',
      input: '   ',
      output: '   '
    },
    {
      name: 'strings that contain booleans',
      input: 'true!',
      output: 'true!'
    },
    {
      name: 'strings that contain numbers',
      input: '100%',
      output: '100%'
    },
    {
      name: 'string "null"',
      input: 'null',
      output: 'null'
    },
    {
      name: 'string "NaN"',
      input: 'NaN',
      output: 'NaN'
    },
    {
      name: 'string "Infinity"',
      input: 'Infinity',
      output: 'Infinity'
    },
    {}
  ])('does not normalise $name', ({ input, output }) => {
    expect(normaliseString(input)).toBe(output)
  })

  it('does not normalise non-lowercase booleans', () => {
    expect(normaliseString('TRUE')).toBe('TRUE')
    expect(normaliseString('True')).toBe('True')
    expect(normaliseString('FALSE')).toBe('FALSE')
    expect(normaliseString('False')).toBe('False')
  })
})
