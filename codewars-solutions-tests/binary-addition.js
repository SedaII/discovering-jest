function addBinary(a,b) {
  const sumDecimal = a + b
  let restDecimal = sumDecimal
  let higherExp = 0
  let res = ''
  for(higherExp ; 2 ** (higherExp + 1) <= sumDecimal; higherExp++) {
  }
  while(higherExp !== -1) {
    
    if(restDecimal - 2**higherExp >= 0){
      restDecimal -= 2**higherExp
      res += '1'
      higherExp--
      
    } else {
      res += '0'
      higherExp--
    }
  }
  
  return res
}

module.exports = addBinary