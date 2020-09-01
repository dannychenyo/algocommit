/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hashmap = {}
    for(var i =0;i < nums.length;i++){
         var difference = target - nums[i]
         
         if(hashmap[nums[i]] != undefined){
             return [hashmap[nums[i]] , i ]
         }
         hashmap[difference] = i;
     }
};