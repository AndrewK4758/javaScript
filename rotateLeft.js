
const rotateLeft = (arr, n) => {

    for (let i = 0; i < arr.length; i++) {
        if (i < n) {
           arr.push(arr.shift())
        }
    }
    return arr
};

console.log(rotateLeft([1, 2, 3, 4, 5], 2))