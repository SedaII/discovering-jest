const ticket = require('./vasya-clerk.js')

describe('Can sell ticket to every person', () => {
  test('ticket([50]) should be NO', () => {
    expect(ticket([50])).toBe('NO')
  })
})