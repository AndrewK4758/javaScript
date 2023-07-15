var countSheep = function (num){
  let sheep = ' sheep...';
  let count = '';
  for (let i = 1; i <= num; i++) {
    count += i.toString() + sheep
  }
return count 
}

console.log(countSheep(3))