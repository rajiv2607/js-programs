class TreeNode { 
constructor(data) {
    this.data=data;
    this.left = null;
    this.right = null;
}
}


class BST {
    
    constructor() {
        this.root = null;
    }
    
    insert(data) {   
        let newNode = new TreeNode(data)
        if(this.root === null) {
            this.root = newNode;
        }
        else {
              function adding(root) {
               let currentNode = root;
                if(data < currentNode.data) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return
                    }
                     else if (currentNode.left !== null) {
                         return adding(currentNode.left);
                        }    
                }
                
                else {
                    if(!currentNode.right) {
                        currentNode.right = newNode
                        return
                    }
                    else if (currentNode.right !== null) {
                         return adding(currentNode.right);
                        }    
                }
                
            
              }
        }
      
      
          
        }
    }


let bst = new BST();
bst.insert(40);
bst.insert(30);
bst.insert(10);
bst.insert(5);
bst.insert(50);

console.log(bst)
