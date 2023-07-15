function cavityMap(grid) {
    
    const arr = grid.map(ele => ele.split(''))
    for (let i = 1; i < arr.length-1; i++) {
     
        for (let j = 1; j < arr.length-1; j++) {
            
            if (arr[i][j] > arr[i][j+1] && arr[i][j] > arr[i][j-1] && arr[i][j] > arr[i+1][j] && arr[i][j] > arr[i-1][j]) {
                arr[i][j] = 'X'
                
            }
        }
    }
return arr.map(ele => ele.join(''))
}

console.log(cavityMap(['179443854',
                       '961621369',
                       '164139922',
                       '968633951',
                       '812882578',
                       '257829163',
                       '812438597',
                       '176656233',
                       '485773814',]))