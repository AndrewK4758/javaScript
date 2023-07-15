var middleNode = function(head) {
    let length = head.length;
    let middle;
    if (length % 2 === 0) {
        middle = length/2 +1;
    }
    else middle = Math.floor(length/2)
    return middle
};

console.log(middleNode([1,2,3,4,5,]))