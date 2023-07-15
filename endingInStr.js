function solution(str, ending){
   return str.includes(ending) ? str.endsWith(ending) ? true : false : false  

  }


  console.log(solution('abcde', 'cde'))

  /*
  const match = str.includes(ending)
   const end = str.endsWith(ending)   
   if (match === false && end === false) return false;
   if (match === true && end === true) return true;
   else return false
  */