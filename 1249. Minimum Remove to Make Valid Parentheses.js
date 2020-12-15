/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    
    var stack = []
    var sub = s.split('')
    
    for(var i = 0;i<s.length;i++){
        
        if(sub[i] === '('){
            stack.push(i)
        }else if(sub[i] === ')' && stack.length === 0){
            sub.splice(i,1,"")  
        }else if(sub[i] === ')' && stack.length > 0){
            stack.pop();
        }
    }
   
    
    for(var i = 0;i < stack.length;i++){
        sub.splice(stack[i],1,'')
    }
        
    var out = sub.join('')
    
    
    return out
};