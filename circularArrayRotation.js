let a = [39356, 87674, 16667, 54260, 43958, 70429, 53682 ,6169, 87496, 66190, 90286, 4912, 44792, 65142, 36183, 43856, 77633, 38902, 1407, 88185, 80399, 72940, 97555, 23941, 96271, 49288, 27021, 32032, 75662, 69161, 33581, 15017, 56835, 66599, 69277, 17144, 37027, 39310, 23312, 24523, 5499, 13597, 45786, 66642, 95090, 98320, 26849, 72722, 37221, 28255, 60906,]; //array to rotate
let n = a.length; //number of elements in the array
let k = 51; //rotation count
let q = 100; //queries
let rotationCount = 0;

const circularArrayRotation = () => {

    for (let i = 0; i < n; i++) {
        
        while (rotationCount < k) {
            rotationCount++;
            a.unshift(a.pop())
        }
        return a
    }
}
console.log(circularArrayRotation())