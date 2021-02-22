const uniqueInOrder = require('./unique-in-order')

describe('uniqueInOrder testing', () => {
  test("uniqueInOrder('GGTZZZZEEEFFFCCSSQ') should return ['G', 'T', 'Z', 'E', 'F', 'C', 'S', 'Q']", () => {
    expect(uniqueInOrder('GGTZZZZEEEFFFCCSSQ')).toStrictEqual(['G', 'T', 'Z', 'E', 'F', 'C', 'S', 'Q'])
  })
  
  test("uniqueInOrder([1,2,2,2,2,3,3,3,4,5,6]) should return [1,2,3,4,5,6]", () => {
    expect(uniqueInOrder([1,2,2,2,2,3,3,3,4,5,6])).toStrictEqual([1,2,3,4,5,6])
  })
})