Array.prototype.myReduce = function(callback, initial) {
  let element = this;
  element.map((el)=>{
    console.log(initial)
    initial = initial !== undefined ? callback(initial,el) : el
  })
  return initial
}


console.log(arr.myReduce((acc, cu) =>{
  return acc + cu
},1))