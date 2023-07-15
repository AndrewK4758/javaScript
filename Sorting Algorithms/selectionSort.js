function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let min = i
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        if (min !== i) {
            [array[i], array[min]] = [array[min], array[i]]
        }
    }

    return array;
  }
  
  console.log(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))