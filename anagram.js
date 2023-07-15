
function anagram(s) {
    let count = 0;
    let left = s.substring(0, s.length/2)
    let right = s.substring(s.length/2, s.length)
    console.log(left, right, s.length)
    if (s.length % 2 !==0) return -1
    for (let i = 0; i < left.length; i ++) {
       if (right.includes(left[i]) === true) {
            right = right.replace(left[i], '')
        } else count++
    }
    return count
}

console.log(anagram('aujteqimwfkjoqodgqaxbrkrwykpmuimqtgulojjwtukjiqrasqejbvfbixnchzsahpnyayutsgecwvcqngzoehrmeeqlgknnb'))