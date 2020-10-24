var arr = [1,2,3,4,5,6,7]


var rotate = function(nums, k) {
    for(var i=0;i<=k;i++) {
            var last = nums[nums.length-1]

    nums.map(function(item,idx) {
    nums[nums.length-1-idx] = nums[nums.length-1-idx-1]
})
nums[0]=last

}
        

   return nums
}
console.log(rotate(arr,2))
 