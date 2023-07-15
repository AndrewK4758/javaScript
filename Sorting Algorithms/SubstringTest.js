function SubstringTest(str1, str2)
{
  const arr=[];
  const arr1=[];
  for (let i=0;i<str1.length-1;i++)
  {
  arr.push(str1.toLowerCase().slice(i,i+2))
  }
  for (let i=0;i<str2.length-1;i++)
  {
  arr1.push(str2.toLowerCase().slice(i,i+2))
  }
  return arr.filter(v=>arr1.includes(v)).length>0
}

console.log(SubstringTest("Something", "Home"))