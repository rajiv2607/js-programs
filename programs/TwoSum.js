//const twoSum = (nums, target) => {
//  const map = {};
//
//  for (let i = 0; i < nums.length; i++) {
//    const another = target - nums[i];
//
//    if (another in map) {
//      return [map[another], i];
//    }
//
//    map[nums[i]] = i;
//  }
//
//  return null;
//};
//
//console.log(twoSum([1, 7, 11, 15], 12))




var arr = [1,2,5]

//var arr = [1, 7, 11, 15]
var sum = 7

let map = new Map()

for(let i=0;i<arr.length;i++) {
  
  let diff = sum - arr[i];
  
  if(!map.has(diff)) {
    map.set(arr[i],i)
    console.log("has map", map)
  }
  else {
    console.log(diff, arr[i])
  }
}