const MergeSort = (array)=>{
  
  if(array.length <= 1){
    return array
  }
  
  let midpoint = Math.floor(array.length/2)
  const arr1 = array.slice(0, midpoint)
  const arr2 = array.slice(midpoint)
  
  return mergeTwo(mergeSort(arr1), mergeSort(arr2))  
}

const mergeTwo = (arr1, arr2)=>{
  let merged = []
  let i = 0
  let j = 0
  
  while(i< arr1.length && j < arr2.length){
    if (arr1[i] < arr2[j]){
      merged.push(arr1[i])
      i++
    } else {
      merged.push(arr2[j])
      j++
    }
  }
  return [...merged, ...arr1.splice(i), ...arr2.splice(j)]//slices take care of the sorted array that may be left over
}

module.exports = MergeSort;
