let arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]
let n = 10;
arr.sort((a,b) => a-b)
//console.log(arr)
let difference = arr[arr.length-1];
arr.map((currentValue, index, array) => {
    let currentMinDifference = Math.abs(currentValue - array[index + 1]);

    if (currentMinDifference < difference) {
        difference =currentMinDifference;
    }
});
console.log(difference)
return difference