function arrayBuilder(obj) {
  let array = Array.from(obj, Object.keys.value)
  return array
}

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
//console.log(arrayBuilder({})); // => []