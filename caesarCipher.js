let s = '159357lcfd';
let n = s.length;
let k = 98; //shift distance to positive
let solution = '';
for (let i = 0; i < n; i++) {
    let char = s[i];
    let asciiNum = s.charCodeAt(i)
    if (char.match(/[A-z0-9]/)) {
       if (asciiNum > 64 && asciiNum < 91) {
        char = String.fromCharCode(((asciiNum - 65 + k) % 26) + 65)
       }
       else if (asciiNum > 96 && asciiNum < 123) {
        char = String.fromCharCode(((asciiNum - 97 + k) % 26) + 97)
       }
    }
    solution += char
}
console.log(solution)
