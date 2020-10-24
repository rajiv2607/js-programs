
let str = "[]{}()"

var open = {
    "{" : "}",
    "["  : "]",
    "(" : ")"
}

var isBalanced =  true

let stack = []

for(let i of str) {
   if(open[i]) {
       stack.push(i)
   }
    else if(i !== open[stack.pop()]){
       
        isBalanced = false
    }
}

console.log(isBalanced)