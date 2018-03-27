function InsertionSort(arrayToSort) {
  for (var i = 0; i < arrayToSort.length; i++) {
    var numberToBeSorted = arrayToSort[i];
    var comparePosition = i - 1;
 
    while (comparePosition >= 0 && arrayToSort[comparePosition] > numberToBeSorted) {
      arrayToSort[comparePosition + 1] = arrayToSort[comparePosition];
      comparePosition--;
    }
    arrayToSort[comparePosition + 1] = numberToBeSorted;
  }
  return arrayToSort;
 }
 
 module.exports = InsertionSort;