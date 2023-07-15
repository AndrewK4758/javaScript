/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    
    let playerA = new Array(8).fill(0)
    let playerB = new Array(8).fill(0)
    for (let i = 0; i < moves.length; i++) {
        
        if (i % 2 === 0) {
            let player = moves[i]
            let row = player[0]
            let col = player[1]
            
            playerA[row]+=1
            playerA[col+3]+=1
            if (row === col) {
                playerA[6] +=1
            }
            if (row === 2 - col) {
                playerA[7]+=1
            }
            
        } else {
            let player = moves[i]
            let row = player[0]
            let col = player[1]
            
            playerB[row]+=1
            playerB[col+3]+=1
            if (row === col) {
                playerB[6] +=1
            }
            if (row === 2 - col) {
                playerB[7]+=1
            }
        }
    }
    
    for (let i = 0; i <=8; i++) {
        if (playerA[i] === 3) return 'A'
        else if (playerB[i] === 3) return 'B'
    }
    if (moves.length === 9) return 'Draw'
    else return 'Pending'
};

console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]))