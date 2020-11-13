// Given adjacency matrix, find number of connected components
// DFS from every node, keep hashmap of visited nodes

function findCircleNum(M) {
  const visited = new Array(M.length).fill(false)
  let circles = 0
  for (let v = 0; v < M.length; v++) {
    if (visited[v] === false) {
      exploreComponent(v, visited, M)
      circles++
    }
  }
  return circles
}
function exploreComponent(v, visited, matrix) {
  for (let e = 0; e < matrix.length; e++) {
    if (matrix[v][e] === 1 && visited[e] === false) {
      visited[e] = true
      exploreComponent(e, visited, matrix)
    }
  }
}
// T: O(n^2) S: O(n)

//BFS same T/S
function findCircleNum(M) {
  const visited = new Array(M.length).fill(false)
  let circles = 0
  let queue = []
  for (let n = 0; n < M.length; n++) {
    if (visited[n] === false) {
      queue.push(n)
      while (queue.length > 0) {
        let v = queue.shift()
        visited[v] = true
        for (let e = 0; e < M.length; e++) {
          if (M[v][e] === 1 && visited[e] === false) queue.push(e)
        }
      }
      circles++
    }
  }
  return circles
}

// Union-Find
function findCircleNum(M) {
  if (M.length == 0 || M == null) return 0
  let p = []
  let L = M.length
  function union(x, y) {
    p[findParent(x)] = findParent(y)
  }
  function findParent(node) {
    if (p[node] == node) return node
    while (p[node] != node) node = p[node]
    return p[node]
  }
  // build the original parent sets first, then union the rest
  for (let v = 0; v < L; v++) p[v] = v
  for (let v = 0; v < L; v++) {
    for (let e = 0; e < L; e++) {
      if (M[v][e] == 1) {
        union(v, e)
      }
    }
  }
  let s = new Set()
  for (let k = 0; k < L; k++) {
    s.add(findParent(p[k]))
  }
  return s.size
}
