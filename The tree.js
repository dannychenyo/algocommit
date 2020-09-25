var deepestLeavesSum = function(root, sums = [], depth = 0) {
  if(!root) return
  sums[depth] = (sums[depth] || 0) + root.val
  deepestLeavesSum(root.left, sums, depth + 1)
  deepestLeavesSum(root.right, sums, depth + 1)
  return sums[sums.length-1]
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let a = new TreeNode(1)
let b = new TreeNode(2)
let c = new TreeNode(3)
let d = new TreeNode(4)
let e = new TreeNode(5)
let f = new TreeNode(6)
let g = new TreeNode(7)
let h = new TreeNode(8)
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
d.left = g
f.right = h

deepestLeavesSum(a)