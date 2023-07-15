const  b = 10; 
const keyboards = [3, 1];
const drives = [5, 2, 8];
const notPossible = -1;
let possible = false;
let totalCost = 0;
let currentCost = 0;

const getMoneySpent = () => {
    keyboards.forEach((keyboard) => {drives.forEach((usb) => {
        currentCost = keyboard + usb;
        if (totalCost < currentCost && currentCost <= b) {
            totalCost = currentCost
            possible = true
        } else if (currentCost > b && possible == false) {
            totalCost = notPossible
        }
    })});
    console.log(totalCost)
    return totalCost
};

getMoneySpent(keyboards, drives, b)