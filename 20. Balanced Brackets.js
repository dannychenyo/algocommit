/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = []
    
    for(var i = 0; i < s.length ;i++){
        
        if(s[i] === '{'){
              stack.push(s[i])
        } else if(s[i] === '('){
              stack.push(s[i])
        } else if(s[i] === '['){
              stack.push(s[i]) }
        
        
        var top = stack[stack.length-1]
        
        if(s[i] ==='}'){
            if(top === '{'){
                stack.pop()
            } else{
                stack.push(s[i])
            }
        }else if(s[i] ===')'){
            if(top === '('){
                stack.pop()
            } else{
                stack.push(s[i])
            }
        }else if(s[i] ===']'){
            if(top === '['){
                stack.pop()
            } else{
                stack.push(s[i])
            }
        } 
    }
    
    return stack.length === 0
};