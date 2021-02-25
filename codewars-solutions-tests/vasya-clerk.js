const tickets = (peopleInLine) => {
  let register = { twentyFive: 0, fifty: 0, hundred: 0}
  let answer = 'YES'
  // ... 2 cases - 50 so does he have 25 ? - 100 does he have one 50 and one 25 ?
  peopleInLine.forEach((dollars) => {
    if(dollars === 100) {
      if(register.twentyFive > 0 && register.fifty > 0) {
        register.twentyFive--
        register.fifty--
        register.hundred++
      } else if (register.twentyFive === 3) {
        register.twentyFive-=3
        register.hundred++
      }else {
        return answer = 'NO'
      }
    } else if (dollars === 50) {
      if(register.twentyFive > 0) {
        register.twentyFive--
        register.fifty++
      } else {
        return answer = 'NO'
      }
    } else {
      register.twentyFive++
    }
  })
  
  return answer
}

module.exports = tickets