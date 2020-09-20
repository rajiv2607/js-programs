class Node{
    constructor(data) {
        this.data = data,
        this.next = null
     }
}


class LinkedList{
    constructor() {
        this.head = null
        this.length = 0
    }
    
    add(value) {
        
        let newNode = new Node(value)
        if(this.head == null) {
            this.head = newNode
        }
        else{
            let current = this.head;
            while(current.next) {
                current = current.next
            }
            current.next = newNode
            this.length++
        }
    }
    
    
    delete(index) {
        let count = 0;
        let current = this.head
        while(count === index-1) {
            current = current.next
        }
        
        current.next = current.next.next
        this.length--
    }
    
    
    reverse(head){
        let prev = null;
        let p=null
        while(head) {
            p = head.next
            head.next = prev;
            
            prev = head
            head = p
        }
        
        return head
            
        
    }
}



let ll = new LinkedList()
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.add(5)
ll.delete(2)
console.log(ll)