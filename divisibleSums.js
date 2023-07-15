let n = 2;
let k = 2;
let ar = [8, 10];
let count = 0;
let pairs = 0;
const divisibleSumPairs = () => {
    for(let i =0; i<n; i++){
        for(j = 0; j < n; j++) {
            if(((ar[i] + ar[j]) % k) == 0 && (i < j)){
                count++
            }
        }
    }console.log('count', count)
}
divisibleSumPairs()


