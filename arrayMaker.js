


const arrayMaker = (n) => {
    let arr = []
    while (n > 0) {
        arr.push(new Array().fill())
        n--
    }
 return arr
}

let lastAnswer = 0;


console.log(arrayMaker(3))