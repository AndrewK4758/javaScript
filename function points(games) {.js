function points(games) {
    let i = -1;
    let points = 0;
    while (i < games.length-1) {
        i++
        let teamX = parseInt(games[i][0]);
        let teamY = parseInt(games[i][2]);
        //teamX = parseInt(teamX);
        //teamY = parseInt(teamY)
        console.log(typeof(teamX))
        if (teamX > teamY) {
            points+=3
        } 
        else if (teamX === teamY) {
            points+=1
        }
        else if (teamX < teamY) {
            points+=0
        }
    }

return points
}
  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))