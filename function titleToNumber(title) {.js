function titleToNumber(title) {
    title =  title.split('')
        title = title.map(letter => letter.charCodeAt(0)-64)
            title = title.reduce((x,y) => x*26+y);
            console.log(title
                )
  }
  console.log(titleToNumber('CODEWARS'))