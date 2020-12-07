var maxArea = function(height) {
    var distance = 0
    var maxArea = 0
    
    
    for(var i = 0; i < height.length;i++){
        distance = 0
        
        
        for(var j = i + 1;j < height.length;j++){
            distance++
            
            maxArea = Math.max(maxArea, distance * Math.min(height[i],height[j]))
            
        }
    }
    
    return maxArea
};