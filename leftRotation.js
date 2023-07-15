let arr = [1, 2, 3, 4, 5];
let d = 2;
while (d > 0) {
arr.push(arr.shift())
d--
}
console.log(arr)
