const chai = require('chai');
const assert = chai.assert;

const QuickSort = require('../lib/QuickSort');

describe('QuickSort', function () {

  it('should sort numbers in an array', function () {
    let array = [7, 11, 10, 2];
    const expected = [2, 7, 10, 11];
    const actual = QuickSort(array);
    assert.deepEqual(actual, expected);
  })

  it('should sort neg and pos numbers', () =>{
    let array = [-11, 7, -10, 100];
    const expected = [-11, -10, 7, 100];
    const actual = QuickSort(array);
    assert.deepEqual(actual, expected);
  })

  it('should sort an array of lower case letters', () =>{
    let array = ['z', 'a', 'w', 'b'];
    const expected = ['a', 'b', 'w', 'z'];
    const actual = QuickSort(array);
    assert.deepEqual(actual, expected);
  })

  it('should sort an array of length: 4, range: 1-100', () =>{
    var randoms = Array.from({length: 4}, () => Math.floor(Math.random() * 100));
    const expected = randoms.sort();
    const actual = QuickSort(randoms);
    assert.isAtLeast(actual[1], actual[0]);
  })

  it('should sort an array of 130,000 numbers', () => {
   const largeArray = [];
   const min = -1000;
   const max = 1000;

   for (let i = 0; i < 10000; i++) {
     let number = Math.floor(Math.random() * (max - min)) + min;

     largeArray.push(number);
   }

   let sortedLargeArray = QuickSort(largeArray);

   for (let i = 1; i < sortedLargeArray.length; i++) {
    assert.isAtLeast(sortedLargeArray[i], sortedLargeArray[i - 1]);
   }
  });
     
}); 