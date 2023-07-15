const numbers = /[0-9]/;
const lower_case = /[a-z]/;
const upper_case = /[A-Z]/;
const special_characters = /[!@#$%^&*()+-]/;


function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
let strongLength = 6;
let count = 4;
let toTestFor =
[
    "0123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "!@#$%^&*()-+"
];

toTestFor.reduce((target, validator) => {
    Array.from(password).some(ele => validator.includes(ele) ? count--:null);
    return target;
})
return Math.max(count, strongLength - n)
}

console.log(minimumNumber(11, '#HackerRank'))








