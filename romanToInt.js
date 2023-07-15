//pay attention to i++ in conditionals and how to traverse hashmap
var romanToInt = function(s) {
    let num = 0
    const map = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && s[i+1] === 'V') {
            num+=4
            i++
            }
        else if (s[i] === 'I' && s[i+1] === 'X') {
            num+=9
            i++
            }            
            else if (s[i] === 'X' && s[i+1] === 'L') {
            num+=40
            i++
            }
        else if (s[i] === 'X' && s[i+1] === 'C') {
            num+=90
            i++
            }
        else if (s[i] === 'C' && s[i+1] === 'D') {
            num+=400
            i++
            }
        else if (s[i] === 'C' && s[i+1] === 'M') {
            num+=900
            i++
            }
        else num+= map[s[i]]
    }
    return num
};

console.log(romanToInt("MCMXCIV"))