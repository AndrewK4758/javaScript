const prevMultOfThree = n => {
    let str = n.toString().split('')
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; i++) {
        let num = parseInt(str.join(''))
        if (num % 3 === 0) return num
        else str.pop()
      }
        return null
    }
  }

  console.log(prevMultOfThree(1343334987776))