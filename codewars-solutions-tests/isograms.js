function isIsogram(str){
  
  const word = str.toLowerCase()
  const arr = word.split('')
  
  return !arr.some((letter) => {
    const split = word.split(letter)
    return split.length >= 3
  })
}

module.exports = isIsogram