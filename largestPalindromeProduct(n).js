function largestPalindromeProduct(n) {
    let nine = '9';
    let test = parseInt(nine.repeat(n));
    let i = test;
    let temp = []
    for (i = test; i > 0; i--) {
      
      for (let j = i; j > 0; j--) {
        let num = i*j;
        let reverse = parseInt((num).toString().split('').reverse().join(''))
        if (num == reverse) {
          temp.push(num)
        }
      }
    }
    temp = temp.sort((a,b)=>b-a)
    return temp[0];
  }
  
  console.log(largestPalindromeProduct(5));