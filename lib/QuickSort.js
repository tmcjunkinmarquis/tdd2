function QuickSort(array){
  if (array.length <= 1){
    return array;
  }
  
  const pivot = array.pop();
  const lessThanArray = []
  const greaterThanArray =[];
  
  for (let i = 0; i < array.length; i++){
    if (array[i] <= pivot){
      lessThanArray.push(array[i])
    } else {
      greaterThanArray.push(array[i])
    }
  }
  return [...QuickSort(lessThanArray), pivot, ...QuickSort(greaterThanArray)]
}
module.exports = QuickSort;