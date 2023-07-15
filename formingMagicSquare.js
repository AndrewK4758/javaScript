const formingMagicSquares = (s) => {
    let magicNum = 15

    let digits = [1,2,3,4,5,6,7,8,9]
    let targetArr = [[0,0,0],[0,0,0],[0,0,0]]


    const isMagicSquare = (s, magicNum) => {
        let diagSum = 0, diagSum2 = 0, rowSum = 0, colSum = 0, len = s.length
    
        for (let i = 0; i < len; i++) {
            diagSum+= s[i][i]
            diagSum2+= s[i][len-1-i]
            for (let j = 0; j < s[i].length; j++) {
                rowSum+= s[i][j]
                colSum+= s[j][i]
            }
        }
        if (rowSum !== magicNum) return false
        if (colSum !== magicNum) return false
        if (diagSum !== magicNum) return false
        if (diagSum2 !== magicNum) return false

        return true
    }



    function dfs(digits, idx, targetArr, s)  {
        if (idx > digits.length) return

        if (idx === digits.length) {
            let idxTar = 0
            let curCost = 0
            for (let i = 0; i < targetArr.length; i++) {
                for (let j = 0; j < targetArr[i].length; j++) {
                    targetArr[i][j] = digits[idxTar++]
                    curCost = Math.abs(targetArr[i][j] - s[i][j])
                }
            }

            if (isMagicSquare(targetArr, magicNum)) {
                let minCost = Math.min(curCost, minCost)
            }
            return
        }

        for (let i = idx; i < digits.length; i++) {
            let temp = digits[i]
            digits[i] = digits[idx]
            digits[idx] = temp

            dfs(digits, idx+1, targetArr, s)
            temp = digits[i]
            digits[i] = digits[idx]
            digits[idx] = temp
        }
    }

    const resArr = dfs(digits, 0, targetArr, s)


}

console.log(formingMagicSquares([[5, 3, 4],
                                 [1, 5, 8],
                                 [6, 4, 2]]));

/*
4 8 2
4 5 7
6 1 6
*/