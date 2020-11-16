/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length != word2.length){
        return false
    }
    var hash = {}
    var count = 0
    var w1 = []
    
    for(var i = 0;i < word1.length;i++){
        if(hash[word1.charAt(i)] == undefined){
            hash[word1.charAt(i)] = count
            w1.push([1,word1.charAt(i)])
            count++
        } else {
            w1[hash[word1.charAt(i)]][0]++
        }
    }
    
    var hash2 = {}
    var count2 = 0
    var w2 = []
    
    for(var i = 0;i < word1.length;i++){
        if(hash2[word2.charAt(i)] == undefined){
            hash2[word2.charAt(i)] = count2
            w2.push([1,word2.charAt(i)])
            count2++
        } else {
            w2[hash2[word2.charAt(i)]][0]++
        }
    }  
    w1.sort()
    w2.sort()

    var count = 0
    for(var i = 0;i<w1.length;i++){
        if(hash2[w1[i][1]] == undefined){
            count++
        }   
    }
    if(count >= 2) return false
    if(w1.length == 1 && w2[0][1] != w1[0][1]) return false
    for(var i = 0;i<w1.length;i++){
       if(w1[i][0] != w2[i][0]){
           return false
       }
    }
    return true
};