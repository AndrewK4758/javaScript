var rob = function(nums) {
    /*
    let odd = 0;
    let even = 0;
    for (let i = 0; i < nums.length; i+=2) {
        even = even+=nums[i];
    }
    for (let i = 1; i < nums.length; i+=2) {
        odd = odd+=nums[i]
    } 
    if (even > odd) return even;
    else return odd
    */
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    let currentTotal = [];
    currentTotal[0] = nums[0];
    currentTotal[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        currentTotal[i] = Math.max(currentTotal[i-1], currentTotal[i-2] + nums[i])
    }
    return currentTotal[currentTotal.length-1]
};

console.log(rob([2,1,1,2,]))