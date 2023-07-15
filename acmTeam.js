/*
  [10101]
  [11100]
  [11010]
  [00101]
  */

const acmTeam = (topic) => {
  let len = topic.length;
	let arr = [];
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        let count = 0;
        for (let k = 0; k < topic[0].length; k++) {
          if (topic[i][k] != '0' || topic[j][k] != '0') {
            count++
          }
        }
        arr.push(count)
      }
    }
    const max = arr.sort((a,b) => b - a)[0]
    let maxCount = 0;
    for (let i of arr) {
      if (i === max) {
        maxCount++
      }
    }
    return [max, maxCount]
};
console.log(acmTeam(['10101', '11100', '11010', '00101']));