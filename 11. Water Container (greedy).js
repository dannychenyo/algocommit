var maxArea = function(height) {
    var distance = 0
    var maxArea = 0
    var L = 0
    var R = height.length -1
    
    while(L < R){
        distance = R - L
        maxArea = Math.max(maxArea, distance * Math.min(height[L],height[R]))      
        if(height[L] < height[R]) L++
        else R--

    }
        
    return maxArea
};