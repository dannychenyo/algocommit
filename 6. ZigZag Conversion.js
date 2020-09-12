/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1){
        return s;
    }
    
    var boolean = false;
    var arr = new Array(numRows).fill('');
    var count = 0
    
    for(var i = 0; i < s.length; i ++){
        arr[count]+=s[i]
        
        if(boolean === true){
            count--
        } else {
            count++
        }

        if(count === 0){
            boolean = false;
        } else if (count === numRows-1){
            boolean = true;
        }
    }
    
    return arr.join('')
    
    
};


