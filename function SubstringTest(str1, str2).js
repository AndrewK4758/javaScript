function SubstringTest(str1, str2)
{
    let result =[];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            result.push(str1[i])
            console.log(result)
        }   
    }
}

console.log(SubstringTest('Something', 'Home'))