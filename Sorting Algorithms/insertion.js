function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        
        for (let j = i; j >= 0; j--) {
            if (array[j+1] < array[j]) {
                [array[j+1], array[j]] = [array[j], array[j+1]]
            }
        } 
    }
    return array
}

console.log(insertionSort([12, 21, 53, 27, 845, 99, 255, 295, 5696, 62, 25559, 6, 2, 3523]))