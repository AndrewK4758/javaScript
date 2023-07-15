function dynamicArray(n, queries) {
  let arr = [];
  for (let i = 0; i < n; i++) {
      arr.push([]);
  }
  let lastAnswer = 0;
  let answers = [];
  for (let i = 0; i < queries.length; i++) {
      let type = queries[i][0];
      let x = queries[i][1];
      let y = queries[i][2];
      let idx = (x ^ lastAnswer) % n;
      if (type === 1) {
          arr[idx].push(y);
      } else if (type === 2) {
          lastAnswer = arr[idx][y % arr[idx].length];
          answers.push(lastAnswer);
      }
  }
  return answers;
}

console.log(dynamicArray(2, 1.0,5))