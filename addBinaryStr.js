/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aArr = a.split('').reverse()
    let bArr = b.split('').reverse()
    let temp = 0
    let res = ''

    while (aArr.length || bArr.length  || temp) {
        temp += (~~aArr.shift()) + (~~bArr.shift())
        let mod = temp % 2
        res = mod + res
        temp = temp > 1 
    }
    return res
};

console.log(addBinary('1010','1011'))