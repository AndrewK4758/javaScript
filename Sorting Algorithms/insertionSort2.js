function insertionSort2(n, arr) {
        
    for (let i = 1; i < n; i++) {
        let numbers = arr[i];
        
        for (let j = i-1; j > -1; j--) {
            if(numbers < arr[j]) {
                arr[j+1] = arr[j];
                arr[j] = numbers;
            } else {
                arr[j+1] = numbers;
                break;
            }
        }

        console.log(arr.join(' '));
    }
}
console.log(insertionSort2(6, [1, 4, 3, 5, 6, 2]))