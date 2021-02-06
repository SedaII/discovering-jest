const fn = require('./index.js')

test('hello() return "hello"', () => {
  const test = fn.hello()
  expect(test).toBe('hello')
})