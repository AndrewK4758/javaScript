let n = 5

const utopianTree = () => {
    let cycle = 1;
    let height = 1;
    
    while (cycle <= n){
      if(cycle % 2 !== 0 ){
        height *= 2;
      }else{
        height++;
      }
      cycle++;
    }
    
    return height;
};

console.log(utopianTree(n))