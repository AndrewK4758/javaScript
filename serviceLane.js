const serviceLane = (n, cases) => {

    let width = [2, 3, 1, 2, 3, 2, 3, 3];
    
    let results = [];

    cases.reduce((target, items) => {
      let min = width[items[0]];
  console.log(min)
      for (let i = items[0]; i <= items[1]; i++) {
        width[i] < min && (min = width[i]);
      }
  
      results.push(min);
  
      return target;
    }, []);
  
    return results;
};

console.log(serviceLane(8, [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]))