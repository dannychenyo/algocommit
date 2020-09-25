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
var inorderTraversal = function(root) {
    var output = []
    
    if(!root){
        return output
    }
    
    var stack = []  
    var tree = root
    
    while(stack.length >= 1 || tree != null){
        
        while(tree != null){
            stack.push(tree)
            tree = tree.left
        }

        tree = stack.pop()
        
        output.push(tree.val)
        
        tree = tree.right
   
    }
    return output
};