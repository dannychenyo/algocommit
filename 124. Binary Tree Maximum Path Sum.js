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
 * @return {number}
 */
var maxPathSum = function(root) {
    let res = -Infinity
    function postorder(node){
        if (!node) return 0
        const leftSum = Math.max(postorder(node.left), 0)
        const rightSum = Math.max(postorder(node.right), 0)
        res = Math.max(res, leftSum + rightSum + node.val)
        return node.val + Math.max(leftSum, rightSum)
    }
    postorder(root)
    return res
};