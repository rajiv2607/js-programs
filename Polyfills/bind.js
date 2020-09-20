Function.prototype.binding =  function(...args) {
    let fun = this
    let instance =  args[0]
    let args1 = args.slice(1)
    
    return function(...args2) {
        fun.apply(instance,[...args1 , ...args2])
    }
}

let obj = {
    name : "Rajiv"
}

function printName(lastname) {
    console.log("My name is " + "" + this.name + " " + lastname)
}


console.log(printName.binding(obj,"Ranjan")())  