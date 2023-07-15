let n = 999999999; //number of prisoners
let m = 99999999; //number of sweets to pass around
let s = 8164; //starting position of sweet distribution

const saveThePrisoner = () => {

    let numberToUse = m % n
    let finalPosition = s-1 + numberToUse;
    if (finalPosition > n) {
        return finalPosition - n
    }
    return finalPosition
};

console.log(saveThePrisoner());

//999999999 999999999 8164

//brute force

/*
let count = 0;
let position = s;
while (count < m) {
    count++
    if (position <= n) {
        position++
        if (position === n) {
            position = 1
        }
    }
    console.log(count, position);
}
return position
*/