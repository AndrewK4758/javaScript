let p = [4, 3, 5, 1, 2];
let n = p .length;

const permutationEquation = () => {
    let newArr = [];
    let map = {};
    
    for (let i = 0; i < p.length; i++) {
       map[p[i]] = i + 1;
    }

    for (let i = 0; i < p.length; i++) {
        let y = map[map[map[p[i]]]];
        newArr.push(y)
    }
    return newArr
};

console.log(permutationEquation());