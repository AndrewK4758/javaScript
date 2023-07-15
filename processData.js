function processData(input) {
    let ans = []
    input.forEach(ele => {
        Number.isInteger(Math.sqrt(ele)%2) ? ans.push('YES') : ans.push('NO')
    });
    return ans
} 
console.log(processData([17,100,88,19,41,10,16,92]))