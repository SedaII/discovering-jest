const toJadenCase = require('./jaden-casing-strings')

describe('toJadenCase tests', () => {
  test('toJadenCase("Hello my name is Jaden")should return "Hello My Name Is Jaden"', () => {
    expect(toJadenCase('Hello my name is Jaden')).toBe('Hello My Name Is Jaden')
  })

  test('toJadenCase("YooooYoooo you BeeeE Okay mate will u give Me 5")should return "YooooYoooo You BeeeE Okay Mate Will U Give Me 5"', () => {
    expect(toJadenCase('YooooYoooo you BeeeE Okay mate will u give Me 5')).toBe('YooooYoooo You BeeeE Okay Mate Will U Give Me 5')
  })
})