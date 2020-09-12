/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    var left =0;
    var right = nums.length -1
    
    if(right === 0 && nums[right]===target){
        return 0
    }
    
    while(left != right){
        
        if(nums[left] === target){
            return left
        } else if (nums[right]=== target){
            return right
        }
        
        if(nums[right] > target ){
            right--
        } else if(nums[left] < target){
            left++
        }

    }
    return -1
    
};