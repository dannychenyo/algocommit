var productExceptSelf = function(nums) {
    var out = new Array(nums.length).fill(1)
    var i = 0
    var product = 1
    
    while(i < nums.length-1){
        
        product *= nums[i]
        out[i+1] = product
        i++
    }
    
    product=1
    
    while(i >= 0){
        product *= nums[i]
        out[i-1] *= product
        i--
    }
    
    
    return out
    
    
    
}
