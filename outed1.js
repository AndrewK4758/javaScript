function outed(meet, boss){
    for (let person in meet) {
        if (person === boss) meet[person] = meet[person] * 2
    }
    const totalScore = Object.values(meet).reduce((acc,nxt) => acc+nxt,0);
    const numPeople = Object.keys(meet).length; 
    const happiness = totalScore/numPeople;
    return happiness > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
  }

  console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'))