/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = []
    let rowStart = 0
    let rowEnd = matrix.length-1
    let colStart = 0
    let colEnd = matrix[0].length-1

    while (rowStart <= rowEnd && colStart <= colEnd) {
        //left to right on top
        for (let i = colStart; i <= colEnd; i++) {
            res.push(matrix[rowStart][i])
        }
        rowStart++

        //top to bottom on right
        for (let i = rowStart; i <= rowEnd; i++) {
            res.push(matrix[i][colEnd])
        }
        colEnd--

        if (rowStart <= rowEnd) {
            //right to left on bottom
            for (let i = colEnd; i >= colStart; i--) {
                res.push(matrix[rowEnd][i])
            }
            rowEnd--

            if (colStart <= colEnd) {
                //bottom to top on left
                for (let i = rowEnd; i >= rowStart; i--) {
                    res.push(matrix[i][colStart])
                }
                colStart++
            }
        }
    }
    return res
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))