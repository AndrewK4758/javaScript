/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let idx1 = 0
    let idx2 = 0
    let res = new Array(num1.length + num2.length).fill(0)
    for (let i = num1.length-1; i >= 0; i--) {
        let carry = 0
        let n1 = (num1[i]).charCodeAt(0) - 48
        idx2 = 0
        for (let j = num2.length - 1; j >= 0; j--) {
            let n2 = (num2[j]).charCodeAt(0) - 48
             let sum = n1 * n2 + res[idx1 + idx2] + carry
console.log(res[idx1+idx2])
             carry = Math.floor(sum/10)

             res[idx1+idx2] = sum % 10

             idx2++
        }
        if (carry > 0) {
            res[idx1 + idx2] += carry
        }
        idx1++
    }
    let i = res.length-1
    while (i >= 0 && res[i] == 0) {
        i--

        if (i === -1) {
            return '0'
        }

        let s = ''
        while (i >= 0) {
            s+= String.fromCharCode(res[i] +48)
            i--
        }
        return s
    }
};

console.log(multiply('212','312'))