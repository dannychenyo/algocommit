/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = []
    
    for(var i = 0;i < tokens.length;i++){
        if(tokens[i] != '/' && tokens[i] != '*' && tokens[i] != '+' && tokens[i] != '-'){
            stack.push(Number(tokens[i]))
        } else if(tokens[i] == '/'){
            var first = stack.pop()
            var second = stack.pop()
            stack.push((second/first) | 0)
        } else if(tokens[i] == '*'){
            var first = stack.pop()
            var second = stack.pop()
            stack.push(second*first)
        } else if(tokens[i] == '+'){
            var first = stack.pop()
            var second = stack.pop()
            stack.push(second+first)
        } else if(tokens[i] == '-'){
            var first = stack.pop()
            var second = stack.pop()
            stack.push(second-first)
        }
    }
    return stack.pop()
};
