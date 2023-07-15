const complete = str =>{
    for (let i = 1; i < str.length; i++) {
      let concat = str+=str[i]
        if (concat === concat.split('').reverse().join('')) {
          return concat
      }
    }
  } 

console.log(complete('a00a'))