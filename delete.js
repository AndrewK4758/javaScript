/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    const x1 = coordinates[0][0]
    const y1 = coordinates[0][1] 
    let slope = null
    for (let i = 1; i < coordinates.length; i++) {
        let x2 = coordinates[i][0]
        let y2 = coordinates[i][1]

        if (slope === null) {
            slope = (y2-y1)/(x2-x1)
        }
        let slope1 = (y2-y1)/(x2-x1)
        if (slope1 !== slope) {
            return false
        }
    }
    return true
};

console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[6,7]]))