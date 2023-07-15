var twoSum = function(numbers, target) {
    let i = 0; 
    let j = numbers.length -1;
    while (i !== j) {
        if (numbers[i] + numbers[j] > target) {
            j--
        }
        else if (numbers[i] + numbers[j] < target) {
            i++
        }
        else {
            return [i+1, j+1]
        }
    }
};


/*
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                result.push(i+1,j+1)
            }
        }
    }
    return result

    */
console.log(twoSum([-1,-1,-1,-1,1,1], 2))