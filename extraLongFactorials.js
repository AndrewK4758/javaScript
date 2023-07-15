

const extraLongFactorials = (n) => {
    if (n < 0) 
    return -1;
else if (n == 0) 
  return 1;
else {
  let ans = n * extraLongFactorials(n - 1);
  return ans
}
};

console.log(extraLongFactorials(5))