const q = 2; // number of queries
const x = 1; // cat A
const y = 3; // cat B
const z = 2; // mouse C
let result = ''; // string to print once winner is determined

const catAndMouse = () => {
    if (Math.abs(z-x) < Math.abs(z-y)) {
        result = 'Cat A';
        console.log(result);
    } else if (Math.abs(z-x) > Math.abs(z-y)) {
        result = 'Cat B';
        console.log(result);
    } else if (Math.abs(z-x) == Math.abs(z-y)) {
        result = 'Mouse C'
        console.log(result)
    }
}

console.log(catAndMouse(x, y, z))