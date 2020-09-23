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
    var output =[]
    var stack  =[]
    var tree = root
    
    while(tree != null || stack.length >= 1){
        while(tree != null){
            stack.push(tree)
            tree = tree.left
        }
        
        
        tree = stack[stack.length -1]
        
        output.push(tree.val)
        
        stack.pop()
        
        tree = tree.right
    }
    
    return output
};