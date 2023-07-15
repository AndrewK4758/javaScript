
function missingNumbers(arr, brr) {
    let brrObj = {}
    for (let num of brr) {
        if (!brrObj.hasOwnProperty(num)) brrObj[num] = 1
        else brrObj[num]++
    }
    
    for (let num of arr) {
        brrObj[num]--
    }
    
    let res = []

    for (let num in brrObj) {
        if (brrObj[num] !== 0) res.push(num)
    }
    return res
}

console.log(missingNumbers([203, 204, 205, 206, 207, 208, 203, 204, 205, 206], [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]))