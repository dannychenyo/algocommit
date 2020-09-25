/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var output = []
    
    if(!root){
        return output
    }
    
    var stack = []  
    var tree = root
    stack.push(tree)
    
    while(stack.length >= 1){
        
        tree = stack.pop()
        if(tree.right != null){
            stack.push(tree.right)
        }
        if(tree.left !=  null){
             stack.push(tree.left)
        }
        
        output.push(tree.val)
        
        
        
        
    }
    return output
    
};