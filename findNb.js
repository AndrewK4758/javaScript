function findNb(m) {
    let total = 0;
    let n = 0;

    while(total < m) {
        n++
        total += n**3
    }
    return total === m ? n: -1;
}
console.log(findNb(4183059834009))