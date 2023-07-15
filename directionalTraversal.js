/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let dir = 0
    let x = 0
    let y = 0
    
        for (let i = 0; i < instructions.length; i++) {

            let move = instructions[i]
            
            if (move === 'L') {
                dir = (4 + dir - 1) % 4
            } 
            else if (move === 'R') {
                dir = (dir + 1) % 4
            }
            else {
            if (dir === 0) y++
            if (dir === 1) x++
            if (dir === 2) y--
            if (dir === 3) x--
        }       
    }
    console.log(x,y, dir)
    return (x === 0 && y === 0) || dir !== 0
};

console.log(isRobotBounded("RLLGGLRGLGLLLGRLRLRLRRRRLRLGRLLLGGL"))