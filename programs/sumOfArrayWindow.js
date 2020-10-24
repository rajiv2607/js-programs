let k=3;
let arr = [1,2,3,4,5,6,7]
// [6,9,13,15,18]
let length = arr.length
let sum = 0
//for(let i=0; i<=length - k ; i++) {
//    for(let j=i;j<i+k;j++) {
//        sum += arr[j]
//    }
//    console.log(sum)
//    sum = 0;
//}

// n2 


//on

let count = 0;

for(let i=0;i<arr.length;i++) {
    count++;
    if(count <= k) {
        sum+=arr[i]
    }
    else if( count> k) {
        console.log(sum)
        count = 0
        sum = 0;
    }
    
}


