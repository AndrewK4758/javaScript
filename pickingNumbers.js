let a = [4, 6, 5, 3, 3, 1]

function pickingNumbers(a) {
    // Write your code here
    let sortedArray = a.sort(function(a,b){
        return(a - b);
    })
    
    let currentArray = [];
    let longestArray = 0;
    let startNumber = 0;
    for(let i = 0; i < sortedArray.length; i++){
        let result = Math.abs(sortedArray[startNumber] - sortedArray[i]);
        if (result <= 1){
            currentArray.push(sortedArray[i]);
            if(currentArray.length > longestArray){
                    longestArray = currentArray.length
                };
        }else {
    
            startNumber = i;
            if(currentArray.length > longestArray){
                longestArray = currentArray.length
            }
            currentArray = [];
            currentArray.push(sortedArray[i]);
        }
    
    }
    console.log(longestArray)
    return longestArray;
    }

pickingNumbers(a)