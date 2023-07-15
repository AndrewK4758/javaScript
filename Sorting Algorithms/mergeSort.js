const mergeSort = (arr) => {

    if (arr.length < 2) {
        return arr
    }
    const middle = Math.floor(arr.length/2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle, arr.length)

    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    const res = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) res.push(left.shift())
        else res.push(right.shift())
    }
    while (left.length) res.push(left.shift())
    while (right.length) res.push(right.shift())
    return res
}
let array = [1,0,0,1,2,987,654,321,2,1,4,6,55]
const sorted = mergeSort(array)
console.log(sorted)