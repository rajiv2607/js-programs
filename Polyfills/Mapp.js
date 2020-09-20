Array.prototype.mapp = function(callback) {
    let result = []
    let arr = this
    let length = arr.length 
    for(let i=0;i<length;i++){
       result.push(callback(arr[i])) 
    }
    
    return result   
}

let arrr = [1,2,3,4,5]

arrr.mapp(function(data) {
    console.log(data)
})