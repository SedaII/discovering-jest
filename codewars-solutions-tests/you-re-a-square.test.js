const isSquare = require('./you-re-a-square')

describe('isSquare', () => {
  test('Is -1 a square number return false', () => {
    expect(isSquare(-1)).toBe(false)
  })
  
  test('Is 0 a square number return false', () => {
    expect(isSquare(0)).toBe(true)
  })
  
  test('Is 3 a square number return false', () => {
    expect(isSquare(3)).toBe(false)
  })
  
  test('Is 4 a square number return false', () => {
    expect(isSquare(4)).toBe(true)
  })
  
  test('Is 25 a square number return false', () => {
    expect(isSquare(25)).toBe(true)
  })
  
  test('Is 26 a square number return false', () => {
    expect(isSquare(26)).toBe(false)
  })
})