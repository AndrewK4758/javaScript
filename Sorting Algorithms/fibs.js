const fibs = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibs(n-1, memo) + fibs(n-2, memo);
    return memo[n]
}

console.log(fibs())

/*
MEMOIZATION GIVES THE ARGUMENT A NEW 'MEMO' OBJECT IF NONE IS PASSED IN THE ARGUMENT CALL
MAKE MEMO[N] = THE RECURSION CALL WITH THE PREVIOUS MEMO VALUE INSIDE AND RETURN THE VALUE OF MEMO[N] OR THE N ARGUMENT VALUE
*/