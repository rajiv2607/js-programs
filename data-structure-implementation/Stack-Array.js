class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    
    
     push(ele){
        this.data[this.top] = ele;
        this.top++;
    }
    
     peek(){
        if(this.data.length>0){
            this.data.pop();
            top--
        }
    }
    
    getSize() {
        return this.top
    }
}


let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.peek()
console.log(stack
           )