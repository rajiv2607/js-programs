Array.prototype.fillter = function(func) {
    let arr =  this
    let result = []
    
    for(let i=0;i<arr.length;i++) {
           if(func(arr[i])){
               result.push(arr[i])
           }
    }
    return result   
}


let aaa = [1,2,3,4,5]
console.log(aaa.fillter((data) => {  return data > 1 }))