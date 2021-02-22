const uniqueInOrder= (iterable) => {
  let arr =[]
  if(typeof iterable === 'string') {
    const str = iterable.split('')
    arr = str.filter((elem, idx) => {
    return iterable[idx + 1] !== elem
  })
  } else {
    arr = iterable.filter((elem, idx) => {
    return iterable[idx + 1] !== elem
  })
  }
  
  return arr
}

module.exports = uniqueInOrder