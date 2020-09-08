/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var largest = nums[0]
    var current = nums[0]
    for (var i = 1;i < nums.length; i++){
        current = Math.max(nums[i], current + nums[i])
        if( current > largest){
            largest = current
        }
    }
    return largest
};