import { graphemeCount } from './grapheme-count.mjs'

describe('graphemeCount', () => {
  it('counts simple strings', () => {
    expect(graphemeCount('Hello')).toBe(5)
    expect(graphemeCount('World')).toBe(5)
    expect(graphemeCount('NHS')).toBe(3)
  })

  it('handles empty strings', () => {
    expect(graphemeCount('')).toBe(0)
  })

  it('counts whitespace', () => {
    expect(graphemeCount(' ')).toBe(1)
    expect(graphemeCount('Hello World')).toBe(11)
    expect(graphemeCount('\n\t')).toBe(2)
  })

  it('counts accented characters', () => {
    expect(graphemeCount('café')).toBe(4)
    expect(graphemeCount('naïve')).toBe(5)
    expect(graphemeCount('résumé')).toBe(6)
  })

  it('counts non-Latin scripts', () => {
    expect(graphemeCount('你好')).toBe(2)
    expect(graphemeCount('こんにちは')).toBe(5)
    expect(graphemeCount('안녕하세요')).toBe(5)
    expect(graphemeCount('Привет')).toBe(6)
  })

  it('counts emoji', () => {
    expect(graphemeCount('👋')).toBe(1)
    expect(graphemeCount('😀')).toBe(1)
    expect(graphemeCount('🇬🇧')).toBe(1)
  })

  it('counts emoji with skin tones', () => {
    expect(graphemeCount('👋🏼')).toBe(1)
    expect(graphemeCount('👍🏿')).toBe(1)
  })

  it('counts emoji sequences', () => {
    expect(graphemeCount('👨‍👩‍👧‍👦')).toBe(1)
    expect(graphemeCount('👨‍💻')).toBe(1)
  })

  it('counts multiple emoji', () => {
    expect(graphemeCount('👋 Hello 👋🏼')).toBe(9)
    expect(graphemeCount('😀😃😄')).toBe(3)
  })

  it('handles mixed content', () => {
    expect(graphemeCount('Hello 👋 World')).toBe(12)
    expect(graphemeCount('café 👋🏼')).toBe(6)
  })

  it('handles surrogate pairs', () => {
    const note = '\u{1F3B5}'
    expect(graphemeCount(note)).toBe(1)
  })

  it('throws for invalid input', () => {
    expect(() => graphemeCount(null)).toThrow(TypeError)
    expect(() => graphemeCount(undefined)).toThrow(TypeError)
    // @ts-expect-error
    expect(() => graphemeCount(123)).toThrow(TypeError)
    // @ts-expect-error
    expect(() => graphemeCount({})).toThrow(TypeError)
    // @ts-expect-error
    expect(() => graphemeCount([])).toThrow(TypeError)
  })

  it('works with real examples', () => {
    expect(graphemeCount('NHS 👨‍⚕️')).toBe(5)
    expect(graphemeCount('Call 111 🏥')).toBe(8)
    expect(graphemeCount('Please describe your symptoms')).toBe(33)
    expect(graphemeCount('Feeling unwell 😷')).toBe(15)
    expect(graphemeCount('José García')).toBe(11)
  })
})
