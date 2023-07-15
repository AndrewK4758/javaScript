const countingSort = (arr) => {
    
    let len = arr.length
    let temp = Array(len).fill().map(()=>[])
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length / 2) temp[arr[i][0]].push('-')
        else temp[arr[i][0]].push(arr[i][1])
    }

    for (let i = 0; i < arr.length; i++) {
        if (temp[arr[i][0]].length > 0 ) res.push(...temp[i])
    }
    return res.join(' ')

}

console.log(countingSort([  [0, 'ab'], 
                            [6, 'cd'], 
                            [0, 'ef'], 
                            [6, 'gh'], 
                            [4, 'ij'],  
                            [0, 'ab'],
                            [6, 'cd'],
                            [0, 'ef'],
                            [6, 'gh'],
                            [0, 'ij'],
                            [4, 'that'],
                            [3, 'be'],
                            [0, 'to'],
                            [1, 'be'],
                            [5, 'question'],
                            [1, 'or'],
                            [2, 'not'],
                            [4, 'is'],
                            [2, 'to'],
                            [4, 'the'] ]))