/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    var count =0;
    for(var i =0;i < nums.length;i++){
        for(var j = 0; j < nums.length; j++){
            if(nums[i] === nums[j] && i < j){
                count++;
            }
                
        }
    }
    return count
};