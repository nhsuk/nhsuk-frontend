import { normaliseOptions } from './normalise-options.mjs'

describe('normaliseOptions', () => {
  const scopes = [
    {
      name: 'document',
      $scope: document
    },
    {
      name: 'div element',
      $scope: document.createElement('div')
    },
    {
      name: 'article element',
      $scope: document.createElement('article')
    },
    {
      name: 'null selector',
      $scope: document.querySelector('.unknown-scope')
    },
    {
      name: 'null',
      $scope: null
    }
  ]

  const handlers = [
    {
      name: 'plain function',
      handler: function errorCallback() {}
    },
    {
      name: 'anonymous function',
      handler: function () {}
    },
    {
      name: 'shorthand function',
      handler() {}
    },
    {
      name: 'arrow function',
      handler: () => {}
    }
  ]

  it('returns defaults', () => {
    const options = normaliseOptions()

    expect(options.scope).toBe(document)
    expect(options.onError).toBeUndefined()
  })

  it('returns defaults for empty object', () => {
    const options = normaliseOptions({})

    expect(options.scope).toBe(document)
    expect(options.onError).toBeUndefined()
  })

  it("returns defaults for 'undefined' scope option", () => {
    const options = normaliseOptions({
      scope: undefined
    })

    expect(options.scope).toBe(document)
    expect(options.onError).toBeUndefined()
  })

  it("returns defaults for 'undefined' error handler option", () => {
    const options = normaliseOptions({
      onError: undefined
    })

    expect(options.scope).toBe(document)
    expect(options.onError).toBeUndefined()
  })

  it("returns defaults for 'null' error handler option", () => {
    const options = normaliseOptions({
      // @ts-expect-error Type 'null' is not assignable
      onError: null
    })

    expect(options.scope).toBe(document)
    expect(options.onError).toBeUndefined()
  })

  it("preserves 'null' scope", () => {
    const options = normaliseOptions(null)

    expect(options.scope).toBeNull()
    expect(options.onError).toBeUndefined()
  })

  it("preserves 'null' scope option", () => {
    const options = normaliseOptions({
      scope: null
    })

    expect(options.scope).toBeNull()
    expect(options.onError).toBeUndefined()
  })

  describe('with $scope option', () => {
    it.each(scopes)("normalises '$name' option into object", ({ $scope }) => {
      const options = normaliseOptions({
        scope: $scope
      })

      expect(options.scope).toBe($scope)
      expect(options.onError).toBeUndefined()
    })
  })

  describe('with $scope parameter', () => {
    it.each(scopes)(
      "normalises '$name' parameter into object",
      ({ $scope }) => {
        const options = normaliseOptions({
          scope: $scope
        })

        expect(options.scope).toBe($scope)
        expect(options.onError).toBeUndefined()
      }
    )
  })

  describe('with error handler option', () => {
    it.each(handlers)(
      "normalises '$name' option into object",
      ({ handler }) => {
        const options = normaliseOptions({
          onError: handler
        })

        expect(options.scope).toBe(document)
        expect(options.onError).toBe(handler)
      }
    )
  })

  describe('with error handler parameter', () => {
    it.each(handlers)(
      "normalises '$name' parameter into object",
      ({ handler }) => {
        const options = normaliseOptions(handler)

        expect(options.scope).toBe(document)
        expect(options.onError).toBe(handler)
      }
    )
  })
})
