function fizzBuzz(n) {
    let result = '';
    for (let i = 0; i <= n; i++) {
        if (i%3==0 && i%5==0) result = 'FizzBuzz';
        else if (i%3==0) result = 'Fizz';
        else if (i%5==0) result = 'Buzz';
        else result = i;
        console.log(result)
    }
    
}

console.log(fizzBuzz(15))