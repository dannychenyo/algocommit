/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.stream = []
    for(var i = 0;i < n;i++){
        this.stream[i] = null
    }
    this.first = 0
};

/** 
 * @param {number} id 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(id, value) {
    var out = []
    this.stream[id-1] = value
    if(id-1 == this.first){      
        if(this.stream[id] == null){
            this.first++
            return [value]
        } else{
            while(this.stream[this.first] != null){    
                if(this.stream[this.first] != null){
                    out.push(this.stream[this.first])
                }
                this.first++
            }       
            return out
        }  
    }
    return []

};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */