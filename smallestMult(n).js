function smallestMult(n) {
    let min = 1;
    let max = n;
    let testNums = []
    for (let i = min; i <= max; i++) {
      testNums.push(i);
    }// above creates range
  
    const commonMult = (currentValue) => num % currentValue === 0; //function to check if current value is a multiple
      let common = false;
      let num = max * (max-1);
      common = testNums.every(commonMult);
      while (common === false) {
        num++
        common = testNums.every(commonMult)
      }
    
    return num
  }
  
  console.log(smallestMult(25));