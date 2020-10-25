var maxSubArray = function(nums) {
    let max = 0;
    let tmax = 0;
    
    if(nums.length === 1) {
        return nums[0]
    }
    for(let i of nums) {
    let el =  i;
        
         max = Math.max(el + max ,0)
         tmax= Math.max(tmax, max)
    }
    
    return tmax
};



var maxSubArray = function(nums) {
    const numsLen = nums.length;
    let curSum = nums[0];
    let maxSum = curSum;
    for (let i = 1; i < numsLen; i++) {
        curSum += nums[i];
        if (nums[i] > curSum) {
            curSum = nums[i];
        }
        if (curSum > maxSum) {
            maxSum = curSum;
        }
    }
    return maxSum;
};
