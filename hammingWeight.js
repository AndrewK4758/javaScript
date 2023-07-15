var hammingWeight = function(n) {
    n=n.toString(2).split('');
    let count = 0;
    n.forEach(ele => {
        if (ele === '1') count++
    })
    return count
};

console.log(hammingWeight(00000000000000000000000000001011))