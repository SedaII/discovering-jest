const addBinary = require('./binary-addition')

test('Sum 1 + 2 and return "11"', () => {
  expect(addBinary(1, 2)).toBe('11')
})