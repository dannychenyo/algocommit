function shiftedBinarySearch(array, target) {
  let left = 0
	let right = array.length - 1
	while (left <= right){
		let mid = Math.floor((left+right)/2)
		if (array[mid] == target){
			return mid
		} else if (array[left] <= array[mid]){
			if (target < array[mid] && target >= array[left]){
				right = mid - 1
			} else {
				left = mid + 1
			}
		} else {
			if (target > array[mid] && target <= array[right]){
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}
	return -1
}