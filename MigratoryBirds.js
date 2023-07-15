const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

const migratoryBirds = () => {
    const typeList = new Array(5).fill(0);
  
    for(let i = 0; i < arr.length; i++){
        
        let number = arr[i];
        
        const numbers = {
            1: () => typeList[0]++,
            2: () => typeList[1]++,
            3: () => typeList[2]++,
            4: () => typeList[3]++,
            5: () => typeList[4]++
        }
        
        numbers[number]();
    }
  
    const max = typeList.reduce((a, b) => Math.max(a, b));

    return typeList.indexOf( max ) + 1;
}

console.log(migratoryBirds(arr))