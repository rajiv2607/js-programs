
 const intersection =  function(arr1, arr2) {
    let intersectionData = []
    let bigArr = (arr1.length > arr2.length) ? arr1 : arr2
    for(let i of bigArr) {
    if(arr1.includes(i)) {
    intersectionData.push(i)
}
    
}
     
     return intersectionData
}
 
 console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]))
