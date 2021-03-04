const toJadenCase = (str) => {
    let arr = str.split(' ')
    arr.forEach((word, idx) => {
      const newWord = word[0].toUpperCase() + word.slice(1)
      arr[idx] = newWord
    })
  
    return arr.join(' ')
  };

  module.exports = toJadenCase