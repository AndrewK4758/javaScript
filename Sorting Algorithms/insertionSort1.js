let arr = [2, 4, 6, 8, 3];
let n = arr.length;

function insertionSort1() {

    /*let i, j;
    
    for (i = 0; i < n; i++) {
        j = i - 1;
        let nextNum = arr[i];
        while (j >= 0 && arr[j] > nextNum) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = nextNum;
    }
    return arr
    */

    const target = arr[n - 1];
    
    while (arr[--n - 1] > target) {
        arr[n] = arr[n - 1];
        
        console.log(...arr);
    }
  
    arr[n] = target;
    console.log(...arr);
}

console.log(insertionSort1())