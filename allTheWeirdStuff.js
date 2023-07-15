function addingAllTheWeirdStuff(array1, array2){
    let sumOfOdd = sumOfOdds(array2)
    let sumofEven = sumofEvens(array2)
    let isOver20 = over20(array2)
    
    for (let i = 0; i < array1.length; i++) {
        
        if (array1[i] < 10) {
            array1[i]+=sumOfOdd
        }
        else if (array1[i] > 10) {
            array1[i]+=sumofEven
        }
        if (isOver20) {
            array1[i]++
        }
    }
    return array1
  }

  const sumOfOdds = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum+=arr[i]
        }
    }
    return sum
  }

  const sumofEvens = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum+=arr[i]
        }
    }
    return sum
  } 

  const over20 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 20) {
            return true
        }
    }
    return false
  }
  
  // Uncomment these to check your work!
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
  