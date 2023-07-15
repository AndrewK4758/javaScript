const staircase = (n) => {
    let output = '#';
    for (let i = 1; i <= n; i++) {
        console.log(output.repeat(i).padStart(n))
    }
}
staircase(6)