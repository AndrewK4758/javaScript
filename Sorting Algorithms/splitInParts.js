var splitInParts = function(s, partLength){
    let result = []
    let ans; 
    for (let i = 0; i < s.length; i += partLength) {
        result.push(s.substring(i, i + partLength))
    }
    ans = result.toString().replace(/,/g, ' ');

    return ans
}
console.log(splitInParts("supercalifragilisticexpialidocious", 3))