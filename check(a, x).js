function check(a, x) {
    return a.some(val => x === val)    
    }
console.log(check(['what', 'a', 'great', 'kata'], 'kat'))