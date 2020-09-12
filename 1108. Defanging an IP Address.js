/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var arr = ""
    
    for(var i =0;i<address.length;i++){
        
        if(address[i] === "."){
            arr = arr + "[.]"
            i++
        }
        arr = arr + address[i]
    }
    return arr
};