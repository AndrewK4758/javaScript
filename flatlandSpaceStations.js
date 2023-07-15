const flatlandSpaceStations = (n, c) => {

    c.sort((a, b) => {return a-b});

    let max = 0;
    for(let i = 0; i < c.length - 1; i++){
        let mean = Math.floor((c[i+1] - c[i])/2)
        max = Math.max(max, mean)
    }

    max = Math.max(max, c[0])
    max = Math.max(max, n-1-c[c.length - 1])
    return max

};

console.log(flatlandSpaceStations(5, [0, 4]))



/*
n = number of cities
c[i] = cities (nodes) with space stations
dist = distance to closest space station 'c[i]'
*/