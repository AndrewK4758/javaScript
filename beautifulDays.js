let i = 13; //starting day
let j = 45; //ending day
let k = 3; //divisor
let beautifulCount = 0;


const beautifulDays = () => {
    for (let start = i; start <= j; start++) {    
        let reverseI = start.toString().split('').reverse().join('');
        if ((start - reverseI) % k === 0) {
            beautifulCount++
        }
    }
    return beautifulCount 
};

console.log(beautifulDays(i, j, k))