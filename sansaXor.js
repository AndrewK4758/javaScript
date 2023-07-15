
function sansaXor(arr) {
    let res = 0
    if (arr.length % 2 === 0) return 0
    for(let i = 0; i < arr.length; i+=2) {
        res ^=arr[i]
    }
    return res
}

console.log(sansaXor([3,4,5]))