/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    var k = m+n-1
    m-=1
    n-=1    
    
    
    while(m >=0 && n >= 0){
        if(nums1[m] > nums2[n]){
            nums1[k--] = nums1[m--]
        } else {
            nums1[k--] = nums2[n--]
        }
        console.log(nums1)
    }
    while(n>=0){
        nums1[k--] = nums2[n--]
    }
    
};