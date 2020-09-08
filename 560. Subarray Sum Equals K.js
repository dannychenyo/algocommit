/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var sum = 0
    var count = 0
    var map = {}
    map[0]=1
    for(var i =0; i < nums.length ;i++){
        sum += nums[i]
        if(map[sum - k]){
            count += map[sum-k]
        }
        
        if(map[sum]){
            map[sum]++
        } else {
            map[sum] = 1
        }
    }
    return count;
    
};