//let l = 10;//lower boung
//let r = 15; //upperbround

const maximizingXor = (l, r) => {
    let max = 0;
    for(let i = l; i <= r; i++) {
        for(let j = l; j <= r; j++) {
            let xor = i ^ j;
            if(xor > max) {
                max = xor;
            }
        }
    }
    return max;
};

maximizingXor(10, 15);