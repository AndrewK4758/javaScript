function validParentheses(parens) {
    let count = 0;
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] == '(') count++;
      if (parens[i] == ')') count--;
      if (count < 0) return false;
    }
    
    return count === 0;
  }

console.log(validParentheses(")()()()("))

//DIFFERENCE BETWEEN FOR LOOP AND FOREACH IS AS SOON AS A VALUE OF THE FOR LOOP IS LESS THAN 0, THE VALUE RETURNS FALSE
//FOREACH LOOP WILL RUN ALL OF THE ELEMENTS AND THEN RETURN A VALUE MAKING THIS INCORRECTLY TRUE