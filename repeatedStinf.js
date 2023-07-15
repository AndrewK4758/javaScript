const repeatedString = (s, n) => {
    let occurances = (s.split("a").length - 1);
    console.log(occurances)
    let max = Math.floor(n / s.length);
    let totalAs= occurances * max;
    totalAs += (s.slice(0, n % s.length).split("a").length - 1);
    console.log(totalAs);
};

repeatedString('aba', 10)