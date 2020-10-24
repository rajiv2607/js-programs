
 var nums = [0,0,1,1,1,2,2,3,3,4]
 var noDups=[]
 var counter=0;
 
 nums.forEach(function(data,index) {
     if(nums[index] == nums[index+1]) {
         noDups[counter] = nums[index]
         counter++
     }
 })
noDups[counter] = nums[nums.length-1]
console.log(noDups)