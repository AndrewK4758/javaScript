const fairRations = (B) => {

    let N = B.length;
    let loaves = 0;
    for (let i = 0; i < N - 1; i++) {
        if (B[i] % 2 == 0) {
            continue
        } else {
            loaves++;
            B[i]++
            B[i+1]++
            
        }console.log(B)
    }

    for (let i = 0; i < N; i++) {
        
        if (B[i] % 2 != 0) {
            loaves = -1;
            break
        }
    }

    if (loaves > -1) {
        loaves = loaves * 2
        console.log(B, loaves)
        return loaves
    }
    
};

console.log(fairRations([2, 3, 4, 5, 6]));