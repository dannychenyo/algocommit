function mergeSort(arr, start, end) {

	if(start < end) {
	  var mid = Math.floor((start + end) / 2);
		mergeSort(arr, start, mid);
		mergeSort(arr, mid+1, end);
		merge(arr, start, mid, end);
	}
}

function merge(arr, start, mid, end){
  var arr2 = []

  var p1= start
  var p2= mid+1

  while(p1 <= mid && p2 <= end){
    if(arr[p1] <= arr[p2]){
      arr2.push(arr[p1])
      p1++
    } else{
      arr2.push(arr[p2])
      p2++
    }
  }
  

  while(p1 <= mid){
    arr2.push(arr[p1])
    p1++
  }
  while(p2 <= end){
    arr2.push(arr[p2])
    p2++
  }
  

  for(var i = start; i <= end; i++){
    arr[i] = arr2[i - start]
  }
  

}

var arr = [5,4,3,2,1,7,8,9,10]
var a = [1,3,5,7,2,4,6,8]
mergeSort(a,0,7)
console.log(a)
