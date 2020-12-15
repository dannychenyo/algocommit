/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = []
    
    for(var i = 0; i< s.length;i++){
        if(s[i] == 'c'){
            if(stack.pop() != 'b') return false
            if(stack.pop() != 'a') return false
        } else{
            stack.push(s[i])
        }
    }
    if(stack.length == 0) return true
    else return false
};