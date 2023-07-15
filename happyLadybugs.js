const happyLadybugs = (b) => {
    let n = b.length;
    for (let i = 0; i < n; i++) {
        if (b[i] !== '_' && b.indexOf(b[i]) === b.lastIndexOf(b[i])) {
            return 'NO'
        }
        if (b.indexOf('_') === -1 && (b[i] !== b[i - 1] && b[i] !== b[i + 1])) {
            return 'NO'
        }
    }
    return 'YES'
};

console.log(happyLadybugs('AABBC_C'))