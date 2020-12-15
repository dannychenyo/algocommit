/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%3 != 0){
        return false
    }
    var abc = 'abc'
    for(var i = 0;i<s.length;i++){
        var curr = s.substring(i,i+3)
        if(curr == abc){
            s = s.substring(0,i) + s.substring(i+3, s.length)
            i = -1
        }
   
    }
    
    if(s.length == 0){
        return true
    } else{
        return false
    }
};