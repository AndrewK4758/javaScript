function candiesToBuy( kids ){
    let first = 1;
    let last = 1;
    for (let i = kids; i > 1; i--) {
        while (first % i !==0) {
            first += last
        }
        last = first
    }
    return first
  }
console.log(candiesToBuy()) 