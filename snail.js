snail = function(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        console.log(array[i][j])
    }
  }
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));