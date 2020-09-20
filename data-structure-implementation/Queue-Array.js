class Queue {
    constructor() {
        this.data = []
        this.length = 0
    }
    
    
    push(element) {
        this.data[this.length] = element
        this.length++
    }
    
    
     peek() {
         if(this.data.length !== 0) {
              this.data.shift()
              this.length--        
         }
     }
    
    
    printData() {
        
    }
}



let queue = new Queue()
queue.push(10)
queue.push(20)
queue.push(30)
queue.peek()
console.log(queue)