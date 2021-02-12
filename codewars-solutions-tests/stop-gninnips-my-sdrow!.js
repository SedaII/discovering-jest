function spinWords(str){
  let arr = str.split(' ')
  
  arr.forEach( (word, index) => {
    
    if(word.length >= 5) {
      let reverse = ''
      
    for(let i = 0; i <= word.length ; i++) {
      
      const idx = word.length - i
      if(word[idx]) {
        reverse += word[idx]
      }
      
    }
      arr[index] = reverse
    }
    
  })
  
  const res = arr.join(' ')
  
  return res
}

module.exports = spinWords