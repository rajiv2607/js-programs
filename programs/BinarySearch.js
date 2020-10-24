let arr = [1,2,3,4,5,6,7,8]
let first = 0
let last = arr.length - 1
let searchFor = 4

while(first<=last) {
    let mid =  Math.floor((last + first) / 2);
    if(arr[mid] == searchFor) {
        console.log("found")
        break;
    }
    
    else if(searchFor> arr[mid]){
        first = mid + 1
    }
    else{
        last = mid -1 
    }
}

//var arr=[1,2,3,4,5,6,7]
//var mid=0
//var searchingFor = 7
//var start = 0
//var last = arr.length-1
//while(start<=last) {
//mid = Math.floor((start+last)/2)
//if(arr[mid] == searchingFor ) {
//    console.log("Found it")
//    break
//}
//    else if(searchingFor>arr[mid]) {
//        start = mid +1
//    }
//    else{
//        last=mid-1
//    }
//}


