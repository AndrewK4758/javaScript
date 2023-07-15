/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let res = []

    const clear = (val) => {
        return val.pop()
    }

    const double = (val) => {
        return val[val.length-1] *2
    }


    for (let i = 0; i < operations.length; i++) {
        if (operations[i] !== 'C' && operations[i] !== 'D' && operations[i] !== '+') res.push(Number(operations[i]))
        if (operations[i] === 'C') clear(res)
        if (operations[i] === 'D') res.push(double(res))
        if (operations[i] === '+') res.push(res[res.length-2] + res[res.length-1]) 
    }
  
    return res.reduce((acc,nxt) => acc+nxt,0)
  };

  console.log(calPoints(["5","-2","4","C","D","9","+","+"]))