function f(x,y,z){
  let volume = x*y*z;
  let cubeSize = 0;
  let cubeNum = 0
  while (cubeSize <= Math.min(z)) {
    cubeSize++;
    cubeNum += Math.round(volume/cubeSize**3)
  }
  return cubeNum
}
console.log(f(3,4,2))