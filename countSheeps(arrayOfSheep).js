function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(ele => {
        if (ele === true) {
            count++
        }
    })
    return count
}
var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

console.log(countSheeps(array1))