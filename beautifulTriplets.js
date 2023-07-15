const beautifulTriplets = (d, arr) => {
    const result = [];
    
    for(let i = 0; i < arr.length; i++){
        const num1 = arr[i];
        const num2 = num1 + d 
        const num3 = num2 + d;
        console.log([num1, num2, num3])
        
        if(arr.includes(num2) && arr.includes(num3)){
            result.push([num1, num2, num3]);    
        }
    }
    
    console.log(...result)
    return result.length;
}
    
beautifulTriplets(10, [1, 2, 3, 4, 5]);

/*
    let count = 0
    let n = arr.length; 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (arr[j] - arr[i] == d && arr[k] - arr[j] == d ) { 
                    count++
                }
            }
        } 
    }
    console.log(count)
    return count

-------------------------------------

        let count = 0
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        const num1 = arr[i] - d;
        const num2 = num1 - d;
        if (arr.includes(num1) && arr.includes(num2)) {
            count++
            console.log(num1, num2)
        }
    }
    console.log(count)
    return count
}
*/