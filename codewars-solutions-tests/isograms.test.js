const isIsogram = require('./isograms')

test('Dermatoglyphics is an isogram?', () => {
  expect(isIsogram('Dermatoglyphics')).toBe(true)
})

test('isogram is an isogram?', () => {
  expect(isIsogram('isogram')).toBe(true)
})

test('aba is an isogram?', () => {
  expect(isIsogram('aba')).toBe(false)
})

test('moOse is an isogram?', () => {
  expect(isIsogram('moOse')).toBe(false)
})

test('isIsogram is an isogram?', () => {
  expect(isIsogram('isIsogram')).toBe(false)
})

test('"" is an isogram?', () => {
  expect(isIsogram('')).toBe(true)
})