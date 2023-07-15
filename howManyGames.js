const howManyGames = (p, d, m, s) => {
let games = 0
let price = p;

while (price <= s) {
    p = p - d
    if (p <= m) {
        price = price + m
        games++ 
    } else {
        price = price + p
        games++
    }
    
}
console.log(games)
return games

};

howManyGames(20, 3, 6, 85)

//9917