let c = [1,1,1,0,1,1,0,0,0,0]; //array of clouds
let e = 100; //energy, one unit is used to jump from cloud to cloud
let k = 3; //size of jump or c[(i+k)%n]
let n = c.length;
//if it lands on thundercloud, energy decreases by 2 aditional units
//game ends when player is back on cloud zero c[0]

const jumpingOnClouds = () => {
    let count = 0;
    let index;
    while (index !== 0 && e >= 0) {
      count === 0 && (index = 0);
      index = (index + k) % n;
      e = c[index] > 0 ? e - 3 : e - 1;
      count++;
    }
  
    return e;
};

console.log(jumpingOnClouds());