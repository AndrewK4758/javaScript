const encryption = (s) => {

    let L = s.length;
    let row = Math.floor(Math.sqrt(L));
    let column = Math.ceil(Math.sqrt(L));
    let grid = [];

    for (let i = 0; i < L; i += column) {
        grid.push(s.substring(i, i + column));
        
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length +1; j++) {
            console.log(grid[i][j])
        }
    }
    

};

console.log(encryption('haveaniceday'))