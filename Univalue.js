function countUnivalSubtrees (root) {
  let count = 0
  findAllSubTrees(root)
  return count
  function findAllSubTrees(node) {
    if (node == null) return true
    const leftUni = findAllSubTrees(node.left)
    const rightUni = findAllSubTrees(node.right)
    if (!leftUni || !rightUni) return false
    if (node.left !== null && node.left.val !== node.val) return false
    if (node.right !== null && node.right.val !== node.val) return false
    count++
    return true
  }
}