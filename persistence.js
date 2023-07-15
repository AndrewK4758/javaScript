function persistence(num) {
    let count = 0;
    let nums = Array.from(String(num).split('')).map(Number)
    console.log(nums)
    while(nums.length > 1) {
      let mult = nums.reduce((acc,nxt) => acc*nxt)
      count++
      nums = Array.from(String(mult).split('')).map(Number)
    }
    return count
  }
  
console.log(persistence(39))

  /*
  1. create variable to hold count
  2. seperate digits of numbers to multiply
  3. multiply digits 
  4. increase count variable
  5. repeat until there is only 1 digit left 
  6. return count
  */