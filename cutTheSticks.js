const cutTheSticks = (arr) => {
    let output = [];
    while (arr.length != 0) {

        let minVal = Math.min(...arr);
        output.push(arr.length);
        for (let i = 0; i < arr.length; i++) {
            let nxt = arr[i] - minVal;

            if (nxt === 0) {
                arr.splice(i, 1);
                i -= 1;
            } else {
                arr[i] = nxt;
            }
         }
    }
    return output
}

cutTheSticks([5, 4, 4, 2, 2, 8])