const s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
const d = 18;
const m = 7;


const birthday = (s, d, m) => {
    let num = s;
    let nums = [];
    let count = 0;
    const add = (arr) => arr.reduce((a, b) => a + b, 0);
    for (let i = 0; i < s.length; i++) {
      let arrayElement = num.slice(0 + i, m + i);
      nums.push(arrayElement);
    }
    if(num.length===1 && num[0]===d){
        count++;
    }else{
      nums.forEach((value) => {
          if (add(value) === d) {
            count++;
          }
        });
    }
    

    return count;
}
console.log(birthday(s, d, m));