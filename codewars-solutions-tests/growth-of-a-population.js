const nbYear = (p0, percent, aug, p) => {
  let nb_year = 0
    let currentPop = p0
    while (currentPop < p ) {
      const newPop = currentPop * (percent/100) + aug
      currentPop += newPop
      nb_year++
    }
  
  return nb_year
}

module.exports = nbYear