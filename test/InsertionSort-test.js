const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const InsertionSort = require('../lib/InsertionSort');

describe('InsertionSort', function () {
  
  it('should be a function', function () {
    assert.isFunction(InsertionSort)
  });

  it('should sort positive numbers in an array', function () {
    let array = [7, 11, 10, 2];
    const expected = [2, 7, 10, 11];
    const actual = InsertionSort(array);
    assert.deepEqual(actual, expected);
  })

  it('should sort positive and negative numbers in an array', function () {
    let array = [7, 11, 10, -2];
    const expected = [-2, 7, 10, 11];
    const actual = InsertionSort(array);
    assert.deepEqual(actual, expected);
  })

  it('should sort an array of lower case letters', function () {
    let array = ['z', 'a', 'w', 'b'];
    const expected = ['a', 'b', 'w', 'z'];
    const actual = InsertionSort(array);
    assert.deepEqual(actual, expected);
  })

  it('should sort an array of length: 4, range: 1-100', function () {
    var randoms = Array.from({length: 4}, function () {Math.floor(Math.random() * 100)});
    const expected = randoms.sort();
    const actual = InsertionSort(randoms);
    assert.deepEqual(actual, expected);
  })

  it('should sort a large array of numbers', function () {
    const largeArray = [];
    const min = -1000;
    const max = 1000;

    for (let i = 0; i < 33000; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }

    let sortedLargeArray = InsertionSort(largeArray);

    for (let i = 1; i < sortedLargeArray.length; i++) {
      expect(sortedLargeArray[i]).to.be.at.least(sortedLargeArray[i - 1]);
    }
  });
      
})



