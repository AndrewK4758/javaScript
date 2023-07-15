let arr = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854];
arr.sort((a,b) => a-b);
let minDiff = 10000000000000000000000000;
for (let i = 0; i < arr.length -1; i++) {
    let diff = arr[i+1] - arr[i]
    if (diff < minDiff) {
        minDiff = diff
        console.log(minDiff)
    }
}

let elements = [];
for(let i =0; i < arr.length -1; i++) {
    let diff = arr[i+1] - arr[i]
    if (diff == minDiff) {
        elements.push(arr[i], arr[i+1])
    }
}
console.log(elements)