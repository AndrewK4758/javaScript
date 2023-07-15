/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let count5 = 0
    let count10 = 0
    let count20 = 0
    for (let i = 0; i < bills.length && count5 >= 0 && count10 >= 0 && count20 >= 0; i++) {
        if (bills[i] === 20) {
            if (count10 > 0) {
                count10--
                count5--
            }
            else count5 -=3
            count20++
        }
        else if (bills[i] === 10) {
            count5--
            count10++
        }
        else count5++
    
    }
    console.log(count10, count20, count5)
    return count5 >= 0 && count10 >= 0 && count20 >= 0
}
console.log(lemonadeChange([5,5,5,5,20,20,5,5,5,5]))