const findTheMedian = (arr) => {
    let max;
    arr.sort((a,b) => a-b);

    for (let i=0; i < arr.length/2; i++) {
        max = arr[0];
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}

console.log(findTheMedian([0, 1, 2, 4, 6, 5, 3]))