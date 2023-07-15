
const bonAppetit = (bill, k, b) => {
    let sum = bill.reduce((a, b) => a + b, 0);
    let annaPrice = (sum - k) / 2;
    if (b - annaPrice > 0) {
        let difference = b - annaPrice;
        return difference
    } else if (b === annaPrice) {
        return 'Bon Appetit'
    }
}

console.log(bonAppetit([3, 10, 2, 9], 10, 7))