function divCon(x){
  let nums = 0;
  let strs = 0;
  for (let i = 0; i < x.length; i++) {
//console.log(typeof(x[i]))
    if (typeof(x[i]) == 'number') {
        nums += x[i]
    } else if (typeof(x[i]) == 'string') {
        strs += parseInt(x[i])
    }
  }
  return nums - strs
}
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))