let divisorCount = 0;
let n = 1012;
let divisor = n.toString().split('');
let zeroCount = 0;

const findDigits = () => {

    for (let i = 0; i < divisor.length; i ++) {
            divisorCount++; 
            if (n % divisor[i] === 0 && divisor[i] > 0 && divisorCount <= divisor.length) {
                zeroCount++
            }
        }    
    return zeroCount
};

console.log(findDigits())