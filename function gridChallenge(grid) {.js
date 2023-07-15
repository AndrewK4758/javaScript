function gridChallenge(grid) {
    let result ;
    
    grid = grid.map(ele => {
        let test = ele.split('').sort();
        return test
    })

    return grid
}

console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']))