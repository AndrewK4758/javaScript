const equalizeArray = (arr) => {
    let arrObj = {};
    let maxCount = 0;
    for (num of arr) {
        arrObj[num] = arrObj[num] + 1 || 1
        for (let value in arrObj) {
            if (arrObj[value] > maxCount) {
                maxCount = arrObj[value]
            }
        }  
    } return arr.length - maxCount
};

equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]);