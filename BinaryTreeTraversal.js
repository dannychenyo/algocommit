// []

function Node(data) {
    this.val = data;
    this.right = null;
    this.left = null;
}


let test = new Node(5)

test.right = new Node(6)
test.left = new Node(3)
test.left.left = new Node(2)
test.left.right = new Node(4)
console.log(test)

//inorder should return [2,3,4,5,6]
var inOrders = []

function inOrder(data){
  if(data !== null){
    this.inOrder(data.left)
    inOrders.push(data.val)
    this.inOrder(data.right)
  }
}

inOrder(test)
console.log(inOrders)

//preorder should return [5,3,2,4,6]
var preOrders = []

function preOrder(data){
  if(data !== null){
    preOrders.push(data.val)
    this.preOrder(data.left)
    this.preOrder(data.right)
    
  }
}

preOrder(test)
console.log(preOrders)


//postorder should return [2,4,3,6,5]
var postOrders = []

function postOrder(data){
  if(data !== null){
    this.postOrder(data.left)
    this.postOrder(data.right)
    postOrders.push(data.val)
  }
}

postOrder(test)
console.log(postOrders)
