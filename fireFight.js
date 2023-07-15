function fireFight(s){
    let str = s.split(' ')
    //console.log(str)
    let res = []
    for (let i = 0; i < str.length; i++) {
        //console.log(str[i])
      if (str[i] === 'Fire') {
        str[i] = '~~'
        
      }
      res.push(str[i])
    }
    return res.join(' ')
  }
  console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"))