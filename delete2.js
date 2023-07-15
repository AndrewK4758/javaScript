function pairwise(arr, arg) {
    let sumOfIdx = 0
    let workingNums = arr.slice()
    for (let i = 0; i < workingNums.length; i++) {
        let num = workingNums[i]
        let targetNum = arg - num
        workingNums[i] = undefined
        const idx = workingNums.indexOf(targetNum)
        if (idx !== -1) {
            sumOfIdx +=i + idx
            workingNums[i] = undefined
            workingNums[idx] = undefined
        }
    }
    return sumOfIdx
  }
  
  console.log(pairwise([1, 1,1], 2))