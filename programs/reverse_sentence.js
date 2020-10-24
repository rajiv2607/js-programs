var name = "My name is Rajiv"

function reversesen(name) {
    var result = ""
    for(var i=name.length-1 ; i>=0 ; i--)
        {
            result = result + name[i]
        }
    return result;
}


function reverse2() {
  var data= name.split('').reverse().join('')
  console.log(data)

}

const rev3 = (name) => name.split('').reverse().join('')

//console.log(reversesen(name)) 
//reverse2(name)
console.log(rev3(name))