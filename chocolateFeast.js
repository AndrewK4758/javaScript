
process.stdin.resume();

process.stdin.setEncoding("ascii");

_input = "data.txt";

process.stdin.on("data", function (input) {

    _input += input;

});




process.stdin.on("end", function () {

   processData(_input);

});


const chocolateFeast = (n, c, m) => {

    let bars = 0;
    let wrappers = 0;
    let freeBars = 0;
    
    while (n >= c) {
        n -= c;
        bars++;
        wrappers++;
        console.log('bars', bars, 'wrap', wrappers)
    }
        while (wrappers >= m) {
            wrappers -= m;
            freeBars++;
            console.log(freeBars, 'free')
            if (freeBars % m) {
                wrappers++
            
        }
    }
    console.log(freeBars, 'free')
    return bars + freeBars
}

console.log(chocolateFeast())

/*
n = bobby money at start
c = cost of the chocolate bar
m = number of wrappers for free bar
*/