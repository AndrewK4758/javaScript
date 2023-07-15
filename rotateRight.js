const { reverse } = require("dns");

var rotate = function(nums, k) {

    /*for(let i = 0; i < nums.length; i++) {
        while (k>0) {
            k--
            nums.unshift(nums.pop())
        }
    }
    return nums
    */
/*
    do {
        k--
        nums.unshift(nums.pop());
    }
    while (k > 0)
    return nums
    */
/*
    while (k > 0) {
        k--;
        nums.unshift(nums.pop());
    }
    return nums
   */ 

    //nums = nums.reverse();
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    const n = nums.length;
    k%=n;

    reverse(nums, 0, n-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, n-1);
};

console.log(rotate([1,2,3,4,5,6,7], 3))