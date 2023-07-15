function gridChallenge(grid) {
    let rowSorted = grid.map(ele => ele.split('').sort())

    let columnSorted = []
    for (let i = 0; i < rowSorted[0].length; i++) {
        let temp = ''
        for (let j = 0; j < rowSorted.length; j++) {
            temp+=rowSorted[j][i]
        }
        columnSorted.push(temp)
    }

    let columnCheck = columnSorted.filter(ele => {
        let val = ele.split('').sort().join('')
        console.log(ele, val)
        return ele === val
    })

    return columnCheck.length === columnSorted.length ? 'YES':'NO'
}

console.log(gridChallenge(['abc'
    ,'ade'
    ,'efg']))