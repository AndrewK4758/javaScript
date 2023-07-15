function toCamelCase(str){
    str = str.split('');
    return str.map((char, idx) => {
        if (char === '-' || char === '_') {
            char = str[idx+1].toUpperCase();
            str.splice(idx+1, 1)
        }
        return char
    }).join('')
    
}
console.log(toCamelCase("the_stealth_warrior"))