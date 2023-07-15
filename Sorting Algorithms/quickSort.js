const quickSort = (arr) => {

    if (arr.length === 0) {
        return []
    }
    else {
        const pivot = arr[0]
        let left = []
        let equal = []
        let right = []
        for (let ele of arr) {
            if (ele < pivot) {
                left.push(ele)
            }
            else if (ele > pivot) {
                right.push(ele)
            }
            else equal.push(ele)
        }
    return [...quickSort(left), ...equal, ...quickSort(right)]
    }
};

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))