const strangeCounter = (t) => {

//##BRUTE FORCE APPROACH## - WORKS WITH SMALL NUMBERS
    /*let value = 3;
    let restarValue = value;
    let timeValue = 1;
        while (timeValue < t) {
            timeValue++;
            value--;
            if (value < 1) {
                value = restarValue *= 2;
            }
        }
            return value*/

            
    let value = 3, restarValue = value, cycle = 1;
        while (value < t) {
                restarValue = 2 * restarValue;
                value += restarValue;
                cycle += 1;
        }
    return value - t + 1;
};

console.log(strangeCounter(100000000000)) 