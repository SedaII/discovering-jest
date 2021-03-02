const minMax = (arr) => {
    arr.sort((a ,b) => {
      return a-b
    })
    return [arr[0], arr[arr.length-1]]; // fix me!
  }

  module.exports = minMax