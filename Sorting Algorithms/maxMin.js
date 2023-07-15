function maxMin(k, arr) {
    let unfairness = Infinity;
    arr = arr.sort((a,b) => a - b);
    console.log(arr.length-k+1)
    for (let i = 0; i < arr.length-k+1; i++) {
        let min = arr[i];
        let max = arr[i + k-1];
        let test = max - min;
        unfairness = Math.min(test,unfairness)
    }
    return unfairness
}
console.log(maxMin(3, [100,200,300,350,400,401,402]))