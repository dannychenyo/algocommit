/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   
    var hash = {}
    var res = []
    var position = 0
    
    for(var i = 0; i < strs.length;i++){
        var anagram = strs[i].split('').sort().join('')
        if(hash[anagram] == undefined){
            hash[anagram] = position 
            res[position] = [strs[i]]
            position++
        } else{
            res[hash[anagram]].push(strs[i])
        }
    }
    return res
};
