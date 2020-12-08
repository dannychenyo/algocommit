/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0
    var buy = 0
    var sell = 0
    
    
    for(var i = 0;i < prices.length;i++){
        
        
        while(prices[i] > prices[i+1]){
            i++
        }
        buy = prices[i]
    
        while(prices[i] < prices[i+1]){ 
            i++
        }
        sell = prices[i]
        
        profit += sell - buy
        
        
            
    }
    return profit 
};