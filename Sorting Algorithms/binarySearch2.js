/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length-1
    let middle = Math.floor(end/2)
    while (nums[middle] !== target) {
        if (end < start) return -1
        if (nums[middle] > target) {
            end = middle -1
            middle = Math.floor(end/2)
        } else {
            start = middle + 1
            middle = Math.floor((end-start)/2+start)
        }
    };
    return middle
}
console.log(search([-1,0,3,5,9,12], 9))