let highestNumber = 0;
let currentNumber = 0;
for (let i = 0; i < arr.length; i++) {
    currentNumber = arr[i]
    for (let j = i; j < arr.length; j++) {
        if (currentNumber > highestNumber) {
            highestNumber = currentNumber
        }
    }
}