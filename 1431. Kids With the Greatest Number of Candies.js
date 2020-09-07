/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var candy = [] 
    var largest =0
    for(var i = 0; i < candies.length;i++){
        if(candies[i] > largest){
            largest = candies[i]
            i=0;
        }
        if(candies[i] + extraCandies >= largest){
            candy[i] = true
        }else{
            candy[i] = false
        }
    }
    return candy
};