function binarySearch(searchList, value) {
    let arrayPath = [];
    let startIdx = 0
    let endIdx = searchList.length-1 
    let middle = Math.floor(endIdx/2)
    while (searchList[middle] !== value) {
        arrayPath.push(searchList[middle])
        if (endIdx < startIdx) return 'Value Not Found'
        if (searchList[middle] > value) {
            endIdx = middle -1
            middle = Math.floor((endIdx)/2)
        }
        else if (searchList[middle] < value) {
            startIdx = middle +1
            middle = Math.floor((endIdx-startIdx)/2+startIdx)
        }
    }
    arrayPath.push(searchList[middle])
    return middle
  }


  console.log(binarySearch([0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70], 70))