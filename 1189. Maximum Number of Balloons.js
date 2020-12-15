/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    var hash = {'b':1,
                'a':2,
                'l':3,
                'o':4,
                'n':5,}
    var index = new Array(6).fill(0)
    var smallest = 99999
    
    for(var i = 0;i<text.length;i++){
        if(hash[text.charAt(i)]){
            index[hash[text.charAt(i)]]++
        }

    }
    if(index[3] < 2 || index[4] < 2){
        return 0
    }
    
    
    
    for(var i = 1;i < index.length;i++){
        if(i == 3 || i == 4){
            var val = Math.floor(index[i]/2)
            smallest = Math.min(smallest,val)
        }else {
            smallest = Math.min(smallest,index[i])
        }
        
    }
    
    return smallest
    
};