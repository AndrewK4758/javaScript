const runningTime = (arr) => {
    let count = 0;
    let n = arr.length - 1;

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]) {
            let numToSort = arr[i];

            arr[i] = arr[i + 1]; // moves the array to the right to check each value
            arr[i + 1] = numToSort;
            count++
            i = -1 //starts i from the beginning of the array
        }
    }
    return count
}

console.log(runningTime([2, 1, 3, 1, 2]))