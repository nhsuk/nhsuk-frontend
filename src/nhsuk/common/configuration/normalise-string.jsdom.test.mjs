import { normaliseArray, normaliseString } from './normalise-string.mjs'

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
    expect(normaliseString(input, { type: 'string' })).toBe(input)

    // Check with already-normalised values
    expect(normaliseString(output)).toBe(output)
    expect(normaliseString(output, { type: 'string' })).toBe(output)
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
    expect(normaliseString(input, { type: 'string' })).toBe(input)
  })

  it('does not normalise non-lowercase booleans', () => {
    expect(normaliseString('TRUE')).toBe('TRUE')
    expect(normaliseString('True')).toBe('True')
    expect(normaliseString('FALSE')).toBe('FALSE')
    expect(normaliseString('False')).toBe('False')
  })

  it('handles missing property schema', () => {
    // @ts-expect-error Property 'type' is missing
    expect(normaliseString('true', {})).toBe(true)

    // @ts-expect-error Property 'type' is missing
    expect(normaliseString('1337', {})).toBe(1337)
  })

  it('handles invalid values', () => {
    // @ts-expect-error Argument of type is not assignable
    expect(normaliseString(['actual', 'array'], undefined)).toBeUndefined()

    // @ts-expect-error Argument of type is not assignable
    expect(normaliseString({ not: 'allowed' })).toBeUndefined()
  })

  it('skips unhandled property schema', () => {
    const inputArray = '["string", "array"]'
    const inputObject = '{ not: "allowed" }'

    // Arrays in strings are ignored even with schema property type
    expect(normaliseString(inputArray)).toBe(inputArray)
    expect(normaliseString(inputArray, { type: 'array' })).toBe(inputArray)

    // Objects in strings are ignored even with schema property type
    expect(normaliseString(inputObject)).toBe(inputObject)
    expect(normaliseString(inputObject, { type: 'object' })).toBe(inputObject)
  })
})

describe('normaliseArray', () => {
  it.each([
    {
      name: 'strings',
      input: '["goose", "gull", "gannet"]',
      output: ['goose', 'gull', 'gannet']
    },
    {
      name: 'booleans',
      input: '[true, false]',
      output: [true, false]
    },
    {
      name: 'booleans as strings',
      input: '["true", "false"]',
      output: [true, false]
    },
    {
      name: 'numbers',
      input: '[0, 1, 2, 3]',
      output: [0, 1, 2, 3]
    },
    {
      name: 'numbers as strings',
      input: '["0", "1", "2", "3"]',
      output: [0, 1, 2, 3]
    },
    {
      name: 'mixed values',
      input: '["goose", true, "false", 0, "1"]',
      output: ['goose', true, false, 0, 1]
    }
  ])('normalises array of $name', ({ input, output }) => {
    expect(normaliseArray(input)).toEqual(output)

    // Check with already-normalised values
    expect(normaliseArray(output)).toEqual(output)
  })

  it.each([
    {
      name: 'unescaped values',
      input: '["goose", "\\"gull\\"", "<strong>gannet</strong>"]',
      output: ['goose', '"gull"', '<strong>gannet</strong>']
    },
    {
      name: 'unicode escaped values',
      input:
        '["goose", "\\"gull\\"", "\u003cstrong\u003egannet\u003c/strong\u003e"]',
      output: ['goose', '"gull"', '<strong>gannet</strong>']
    },
    {
      name: 'HTML escaped values',
      input:
        '["goose", "&quot;gull&quot;", "&lt;strong&gt;gannet&lt;/strong&gt;"]',
      output: [
        'goose',
        '&quot;gull&quot;',
        '&lt;strong&gt;gannet&lt;/strong&gt;'
      ]
    }
  ])('normalises arrays of $name', ({ input, output }) => {
    expect(normaliseArray(input)).toEqual(output)
    expect(normaliseArray(encodeURIComponent(input))).toEqual(output)
  })

  it.each([
    {
      name: 'undefined value',
      input: undefined,
      output: []
    },
    {
      name: 'null value',
      input: '[null]',
      output: []
    },
    {
      name: 'NaN value',
      input: '[NaN]',
      output: []
    },
    {
      name: 'Infinity value',
      input: '[Infinity]',
      output: []
    },
    {
      name: 'nested array value',
      input: '[["nested", "array"]]',
      output: []
    },
    {
      name: 'malformed closing square bracket',
      input: '["goose", "gull", "gannet"]]',
      output: []
    },
    {
      name: 'double-escaped value',
      input: '[&quot;goose&quot;,&quot;gull&quot;,&quot;gannet&quot;]',
      output: []
    }
  ])('does not allow array with $name', ({ input, output }) => {
    expect(normaliseArray(input)).toEqual(output)
  })

  it('skips unhandled value types', () => {
    // @ts-expect-error Parameter 'value' not provided
    expect(normaliseArray()).toEqual([])
    expect(normaliseArray('')).toEqual([])
    expect(normaliseArray(null)).toEqual([])
    expect(normaliseArray('null')).toEqual([])
    expect(normaliseArray('[["nested", "array"]]')).toEqual([])
    expect(normaliseArray('[{ not: "allowed" }]')).toEqual([])
    expect(normaliseArray('{ not: "allowed" }')).toEqual([])
  })
})
