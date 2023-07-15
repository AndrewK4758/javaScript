function lastDigit(n, d) {
    if (d <= 0) return []
    let str = n.toString()
    if (d > str.length) d = str.length
    let res = [];
    for (let i = str.length - d; i < str.length; i++) {
        res.push(parseInt(str[i]))
    }
    return res
}

console.log(lastDigit(1343,5))