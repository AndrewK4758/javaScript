let x1 = 14; // kangaroo 1 start position
let v1 = 4; // distance kangaroo 1 jumps 
let x2 = 98; // kangaroo 2 start position
let v2 = 2; // distance kangaroo 2 jumps
let maxAttempts = 10000;
let kangaroo1HopCount = 0;
let kangaroo2HopCount = 0;

const kangaroo = () => {
    while (x1 + (v1 * kangaroo1HopCount) != x2 + (v2 * kangaroo2HopCount) && kangaroo1HopCount < maxAttempts && kangaroo2HopCount < maxAttempts) {
        kangaroo1HopCount++;
        kangaroo2HopCount++
    }
    if (x1 + (v1 * kangaroo1HopCount) === x2 + (v2 * kangaroo2HopCount) && kangaroo1HopCount === kangaroo2HopCount) {
        console.log('YES')
        return 'YES'
    }
    else if (x1 + (v1 * kangaroo1HopCount) != x2 + (v2 * kangaroo2HopCount) && kangaroo1HopCount != kangaroo2HopCount) {
        console.log('NO')
        return 'NO'
    }
    else if (x1 + (v1 * kangaroo1HopCount) != x2 + (v2 * kangaroo2HopCount) && kangaroo1HopCount === kangaroo2HopCount) {
        console.log('NO')
        return 'NO'
    }
    else if (x1 + (v1 * kangaroo1HopCount) === x2 + (v2 * kangaroo2HopCount) && kangaroo1HopCount != kangaroo2HopCount) {
        console.log('NO')
        return 'NO'
    } 
}

kangaroo()