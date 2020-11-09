class MaxHeap {
  constructor(arr){
    this.heap = buildHeap(arr)
  }

  buildHeap(arr){
    for (let i = 0; i < arr.length; i++){
      this.bubbleDown(i, arr.length - 1, this.heap)
    }
    return this.heap
  }
  peek(){
    return this.heap[0]
  }
  insert(value){
    this.heap.push(value)
    this.bubbleUp(this.heap.length - 1, this.heap)
  }
  bubbleUp(currIdx, heap){
    let parentIdx = Math.floor((currIdx-1)/2)
    while (currIdx > 0 && heap[currIdx] > heap[parentIdx]){
      swap(heap, currIdx, parentIdx)
      currIdx = parentIdx
      parentIdx = Math.floor((currIdx-1)/2)
    }
  }
  remove(){
    swap(this.heap, 0, this.heap.length - 1)
    const removed = this.heap.pop()
    this.bubbleDown(0, this.heap.length - 1, this.heap)
    return removed
  }
  bubbleDown(currIdx, endIdx, heap){
    let leftChildIdx = currIdx * 2 + 1
    while (leftChildIdx <= endIdx){
      const rightChildIdx = currIdx * 2 + 2 <= endIdx ? currIdx * 2 + 2 : -1
      let idxToSwap
      if (rightChildIdx !== -1 && heap[rightChildIdx] > heap[leftChildIdx]){
        idxToSwap = rightChildIdx
      } else {
        idxToSwap = leftChildIdx
      }
      if (heap[idxToSwap] > heap[currIdx]){
        swap(heap, idxToSwap, currIdx)
        currIdx = idxToSwap
        leftChildIdx = currIdx * 2 + 1
      } else return
    }
  }
}

function heapSort(arr){
  let maxHeap = buildHeap(arr)
  for(var i = arr.length-1; i > 0; i--){
    swap(maxHeap.heap,0, i)
    maxHeap.bubbleDown(0, i - 1, maxHeap.heap)
  }
  
}


function swap(arr, i, j ){
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}