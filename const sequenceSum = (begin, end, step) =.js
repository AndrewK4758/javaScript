const sequenceSum = (begin, end, step) => {
    let total = 0;
    let stop;
    if (begin > end) return 0;
    
    for (let i =begin; i <= end; i+=step){
        total+=i;
        stop = i
    }
    
    if (stop !== end) return end
    return total
  };

  console.log(sequenceSum(411,867,51))