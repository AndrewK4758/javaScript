var reverseWords = function(s) {
    const split = s.split(' ')
    let result = split.map(str => {
        return str.split('').reverse().join('')
    })
    
    return result.join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"))