const nbYear = require ('./growth-of-a-population')

describe('nbYear()', () => {
  test('nbYear(1000, 10, 0, 1500) should return 5 years', () => {
    expect(nbYear(1000, 10, 0, 1500)).toBe(5)
  })
  test('nbYear(1000, 10, 100, 1600) should return 3 years', () => {
    expect(nbYear(1000, 10, 100, 1600)).toBe(3)
  })
  test('nbYear(1500000, 0.25, 1000, 2000000) should return 94 years', () => {
    expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94)
  })
})