function countPositivesSumNegatives(input) {
  if (input === [] || input === null) {
    return []
  }
  let countPos = 0;
  let sumNeg = 0;
  let result = [];
  input.forEach(ele => {
    if (ele > 0) {
      countPos++
    } else sumNeg+=ele;
  })
  result.push(countPos, sumNeg);
  return result
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))