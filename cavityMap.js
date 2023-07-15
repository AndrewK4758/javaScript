const cavityMap = (grid) => {
    const twoDArray = grid.map(ele => ele.split(''))
    
    for (let i = 1; i < twoDArray.length - 1; i ++) {
        for (let j = 1; j < twoDArray[i].length - 1; j++) {
            console.log(twoDArray)
        }
    }
}
console.log(cavityMap(['1112', '1912', '1892', '1234']))