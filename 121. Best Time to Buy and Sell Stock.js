/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var buy = Number.MAX_SAFE_INTEGER
    var profit = 0;
    for(var i = 0; i< prices.length;i++){
        var temp = prices[i] - buy
        if(prices[i] < buy){
            buy = prices[i]
        }
        if(temp > profit){
            profit = temp;
        }
    }
    return profit;
};