/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var s2 = ''
    var tempString = '';
    
    for(var i = s.length-1; i >= 0 ;i--){
        
        tempString = s[i] + tempString
        
        if(s[i] === ' ' || i === 0){
            if(tempString != ' '){
                tempString = tempString.replace(' ','')
                
                s2 += tempString + " " 
            }

            tempString = ''
        }
        
    }
    if(s2[s2.length-1] === ' '){
        s2 = s2.substring(0,s2.length-1)
    }
    return s2;
};