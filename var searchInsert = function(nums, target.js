var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) return i
    }

    return nums.length
};

console.log(searchInsert([1,3,5,6], 5))







/*
for (let i = 0; i < nums.length; i++) {
    let test = nums[i];
    if (nums[0] < 0) {
        if (test < target && nums[i + 1] > target) return i+1;
    }
    if (target === 0 || target < nums[0]) return 0;
    if (test === target) return i;
    if (test < target && nums[i + 1] > target) return i+1;
}
return nums.length 
};*/