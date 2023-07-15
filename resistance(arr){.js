function resistance(arr){
    let sum = arr.map(ele => ele.reduce((acc,nxt) => acc+nxt,0))
    let R = sum.map(ele => 1/ele)
    let ans = R.reduce((acc,nxt) => acc+nxt,0)
    return Math.round((1/ans) * 100) / 100
    
  }

  console.log(resistance([[13,8],[17,17,3],[4,7,12,12,8]] ))