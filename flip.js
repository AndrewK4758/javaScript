const flip=(d, a)=>{
  
  return d === 'R' ? d.sort((a,b) => a-b) : a.sort((a,b) => a-b).reverse()
}
console.log(flip([3, 2, 1, 2], [1, 4, 5, 3, 5]))