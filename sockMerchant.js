let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let n = ar.length
let pairs = 0;

const sockMerchant = () => {
    

    const count = {};
    
    ar.forEach(element => {
      count[element] = (count[element] || 0) + 1;
    });
    ar.forEach(ele => {
        count[ele] = count[ele] % 2 === 0;
        pairs += count[ele]
    }) 
    console.log(pairs);
}

console.log(sockMerchant(n, ar))