let sqr;
let splitSqr;
let l;
let r;
let result = [];

const kaprekarNumbers = (p, q) => {

for (let i = p; i <= q; i++) {
    sqr = i ** 2;
    splitSqr = sqr.toString();
    l = splitSqr.substring(0, splitSqr.length/2);
    r = splitSqr.substring(splitSqr.length/2, splitSqr.length);

    if (Number(l) + Number(r) === i) {
        result.push(i)
    }
}

if (result.length == 0) {
    console.log('INVALID RANGE')
    return 'INVALID RANGE'
} else {
    console.log(...result)
    return result
}

}

kaprekarNumbers(1, 100)
    
