function quickSort1 (arr, startIdx = 0, endIdx = arr.length - 1){
  if (arr.length <= 1) return arr
  if (startIdx >= endIdx) return
  let pivotIdx = startIdx
  let leftIdx = pivotIdx + 1
  let rightIdx = endIdx
  while (leftIdx <= rightIdx){
    if (arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]){
      swap(arr, leftIdx, rightIdx)
    }
    if (arr[leftIdx] <= arr[pivotIdx]) leftIdx++
    if (arr[rightIdx] >= arr[pivotIdx]) rightIdx--
  }
  swap(arr, pivotIdx, rightIdx)
  quickSort1(arr, startIdx, rightIdx-1)
  quickSort1(arr, rightIdx+1, endIdx)
  return arr
}

function swap(arr, i, j){
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function quickSort2(arr, startIdx=0, endIdx= arr.length - 1){
  if (arr.length > 1){
    //while left < pivot left++
    //while right > pivot right--
    //if left < right swap
  }
}

function partition(arr, leftIdx, rightIdx){
  //pick pivot
  while (leftIdx <= rightIdx){
    //while left is "correct" left++
    // while right is "correct" right--
    // if both out of place, swap
  }
}