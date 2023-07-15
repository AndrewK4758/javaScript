function eitherFilter(array, callback1, callback2) {
    let res = []
  const num1 = array.filter(ele => {
    if (callback1(ele) === true) return ele
  })
  const num2 = array.filter(ele => {
    if (callback2(ele) === true) return ele
})
    res.push(num1, num2)
  return res.flat()
}

// Uncomment these to check your work!
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]