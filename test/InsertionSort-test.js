const chai = require('chai');
const assert = chai.assert;

const InsertionSort = require('../lib/InsertionSort');

describe('InsertionSort', function () {
  
  it('should be a function', function () {
    assert.isFunction(InsertionSort)
  });

  it('for an unsorted array of length 1, should put index 0 from unsorted array into empty sorted array so it now occupies the position of index 0', function () {
    let array = [7];
    let returnedSortedArray = InsertionSort(array)
    const expected = 7;
    const actual = returnedSortedArray[0];
    assert.deepEqual(actual, expected);
  });

  it.only('for an unsorted array of length 2, should compare index 0 from sorted array and index 0 in unsorted array, swapping if necessary for the smaller to be in the index 0 of the sorted array', function () {
    assert.isFunction(insertionSort)
  });

  it('should loop over the unsorted array and compare each index to the sorted array, inserting just before the sorted indexed value is greater', function () {
    assert.isFunction(insertionSort)
  });

  





  // put first element from unsorted to sorted array.  one single element is sorted by definition
// put first element from unsorted and check against last element in unsorted, if smaller, swap the two number
// same for next in unsorted, but also check againt last and first of sorted
// same for next in unsorted, now just check until it finds something smaller than it , then done 
// ex: swap, swap , swap, stop and insert

// last element of unsorted, get it inserted, then done
      
}); 




// describe('insertionSort', () => {
  
//   it('should be a function', () => {
//     assert.isFunction(insertionSort)
//   });

//   it('should sort numbers in an array', () =>{
//     let array = [7, 11, 10, 2];
//     const expected = [2, 7, 10, 11];
//     const actual = insertionSort(array);
//     assert.deepEqual(actual, expected);
//   })

//   it('should sort negative numbers', () =>{
//     let array = [-11, -2, -10, -77];
//     const expected = [-77, -11, -10, -2];
//     const actual = insertionSort(array);
//     assert.deepEqual(actual, expected);
//   })

//   it('should sort neg and pos numbers', () =>{
//     let array = [-11, 7, -10, 100];
//     const expected = [-11, -10, 7, 100];
//     const actual = insertionSort(array);
//     assert.deepEqual(actual, expected);
//   })

//   it('should sort an array of lower case letters', () =>{
//     let array = ['z', 'a', 'w', 'b'];
//     const expected = ['a', 'b', 'w', 'z'];
//     const actual = insertionSort(array);
//     assert.deepEqual(actual, expected);
//   })

//   it('should sort an array of upper case letters', () =>{
//     let array = ['Z', 'A', 'W', 'B'];
//     const expected = ['A', 'B', 'W', 'Z'];
//     const actual = insertionSort(array);
//     assert.deepEqual(actual, expected);
//   })

//   it('should sort an array of lenght: 4, range: 1-100', () =>{
//     var randoms = Array.from({length: 4}, () => Math.floor(Math.random() * 100));
//     const expected = randoms.sort();
//     const actual = insertionSort(randoms);
//     assert.deepEqual(actual, expected);
//   })

//   it('should sort a large array of numbers', () => {
//    const largeArray = [];
//    const min = -1000;
//    const max = 1000;

//    for (let i = 0; i < 36000; i++) {
//      let number = Math.floor(Math.random() * (max - min)) + min;

//      largeArray.push(number);
//    }

//    let sortedLargeArray = insertionSort(largeArray);

//    for (let i = 1; i < sortedLargeArray.length; i++) {
//      expect(sortedLargeArray[i]).to.be.at.least(sortedLargeArray[i - 1]);
//    }
//  });


// });  



