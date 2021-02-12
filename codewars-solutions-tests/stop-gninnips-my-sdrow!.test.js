const spinWords = require('./stop-gninnips-my-sdrow!')

test('Expecting "Welcome" to be "emocleW"', () => {
  expect(spinWords('Welcome')).toBe('emocleW')
})

test('Expecting "Hey fellow warriors" to be "Hey wollef sroirraw"', () => {
  expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw')
})

test('Expecting "This is a test" to be "This is a test"', () => {
  expect(spinWords('This is a test')).toBe('This is a test')
})

test('Expecting "This is another test" to be "This is rehtona test"', () => {
  expect(spinWords('This is another test')).toBe('This is rehtona test')
})

test('Expecting "You are almost to the last test" to be "You are tsomla to the last test"', () => {
  expect(spinWords('You are almost to the last test')).toBe('You are tsomla to the last test')
})

test('Expecting "Just kidding there is still one more" to be "Just gniddik ereht is llits one more"', () => {
  expect(spinWords('Just kidding there is still one more')).toBe('Just gniddik ereht is llits one more')
})

test('Expecting "Seriously this is the last one" to be "ylsuoireS this is the last one"', () => {
  expect(spinWords('Seriously this is the last one')).toBe('ylsuoireS this is the last one')
})