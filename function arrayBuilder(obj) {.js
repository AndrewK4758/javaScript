function arrayBuilder(obj) {
    const arr = []

    for (let key in obj) {
        let count = obj[key]

        while (count > 0) {
            arr.push(key)
            count--
        }
    }
    return arr
}

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []