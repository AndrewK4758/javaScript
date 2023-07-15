var moveZeroes = function(nums) {
    let nonZeroIdx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let test = nums[i];
            nums[i] = nums[nonZeroIdx];
            nums[nonZeroIdx] = test;
            nonZeroIdx++
        }
    }
};
console.log(moveZeroes([0,1,0,3,12]))