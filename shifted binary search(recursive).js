function search(arr,  low, high, value){
  if( low > high ){
    return -1
  }
  var mid = Math.floor((low + high)/2)
  if(arr[mid] === value){
    return mid
  }

  if(arr[low] <= arr[mid]){
    if(value >= arr[low] && value <= arr[mid]){
      return search(arr,low,mid-1,value)
    }
    return search(arr,mid+1, high, value)
  }

  // if(value >= arr[mid] && value <= arr[high]){
  //   return search(arr,mid+1,high,value)
  // }
  // return search(arr,low,mid-1,value)
}

var a = [5,6,7,8,9,1,2,3,4]
console.log(search(a,0,a.length-1,4))