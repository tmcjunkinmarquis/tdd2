const chai = require('chai');
const assert = chai.assert;

const MergeSort = require('../lib/MergeSort');

describe('MergeSort', function () {

  it('should sort numbers in an array', function () {
    let array = [7, 11, 10, 2];
    const expected = [2, 7, 10, 11];
    const actual = MergeSort(array);
    assert.deepEqual(actual, expected);
  })

  it('should sort negative and positive numbers in an array', function () {
    let array = [-11, 7, -10, 100];
    const expected = [-11, -10, 7, 100];
    const actual = MergeSort(array);
    assert.deepEqual(actual, expected);
  })

  it('should sort an array of lower case letters', function () {
    let array = ['z', 'c', 'w', 'd'];
    const expected = ['c', 'd', 'w', 'z'];
    const actual = MergeSort(array);
    assert.deepEqual(actual, expected);
  })

  it('should sort an array of lenght: 4, range: 1-100', function () {
    var randoms = Array.from({length: 4}, () => Math.floor(Math.random() * 100));
    const expected = randoms.sort();
    const actual = MergeSort(randoms);
  })

  it('should sort a large array of 130,000 numbers', () => {
    const largeArray = [];
    const min = -1000;
    const max = 1000;

    for (let i = 0; i < 10000; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }

    let sortedLargeArray = MergeSort(largeArray);

    for (let i = 1; i < sortedLargeArray.length; i++) {
      assert.isAtLeast(sortedLargeArray[i], sortedLargeArray[i - 1]);
    }
  });
});  