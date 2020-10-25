let arr = [7,1,5,3,6,4];

var maxProfit = function(prices) {
    let profit = 0

for(let i=0;i<prices.length-1;i++) {
 
  let pr = prices[i+1] - prices[i]
  
  profit = Math.max(profit, pr +profit )
}
    
    return profit
};
