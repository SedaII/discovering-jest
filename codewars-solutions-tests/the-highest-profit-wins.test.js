const minMax = require('./the-highest-profit-wins')
 describe('minMax()', () => {
   test('minMax([2, 6, 5, 8, 4]) should return [2, 8]', () => {
     expect(minMax([2, 6, 5, 8, 4])).toStrictEqual([2, 8])
   })

   test('minMax([12]) should return [12, 12]', () => {
     expect(minMax([12])).toStrictEqual([12, 12])
   })

   test('minMax([12, 22, "A"]) should return [12, 22]', () => {
    expect(minMax([12, 22, "A"])).toStrictEqual([12, 22])
  })
 })