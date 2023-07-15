let stringList = ['aba', 'baba', 'aba', 'xzxb']; //list of strings
let queries = ['aba', 'xzxb', 'ab']; //quieries preformed on strings

const matchingStrings = () => {
    let countObj = {};
    let result = Array(queries.length);

    stringList.forEach(string => {
        if (countObj[string]) {
            countObj[string]++           
        } else {
            countObj[string] = 1
        }
    });

    queries.forEach((query, qIdx) => {
        if (countObj[query]) {
            result[qIdx] = countObj[query];
        } else {
            result[qIdx] = 0;
        }
    })
    return result
};

console.log(matchingStrings())