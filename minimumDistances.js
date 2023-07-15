const minimumDistances = (a) => {

let min = 1000000000;
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
        if (a[i] === a[j] && i != j) {
            min = Math.min(min, Math.abs(i - j))
        }
    }
}
const result = (min === 1000000000 ? -1 : min)
console.log(result)
};

minimumDistances([7, 1, 3, 4, 1, 7]);


/*
let res = 0;

a.forEach((i, idxI) => { a.forEach((j, idxJ) => {
   
    if (i === j) {
             
        console.log(res) 
    } else {
        return -1
    } 
})});
*/