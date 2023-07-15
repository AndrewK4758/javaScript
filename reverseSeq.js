const reverseSeq = n => {
  let result = []
  while (n > 0) {
    result.push(n--)
  }
  console.log(result)
};

reverseSeq(5)