const chai = require('chai');
const assert = chai.assert;

const MergeSort = require('../lib/MergeSort');

describe('MergeSort', function () {
  var block;

  it('should sort numbers in an array', function () {
        let array = [7, 11, 10, 2];
        const expected = [2, 7, 10, 11];
        const actual = MergeSort(array);
        assert.deepEqual(actual, expected);
      })

    it('should sort neg and pos numbers', function () {
          let array = [-11, 7, -10, 100];
          const expected = [-11, -10, 7, 100];
          const actual = MergeSort(array);
          assert.deepEqual(actual, expected);
    })
  
      
}); 





//   it('should sort negative numbers', () =>{
//     let array = [-11, -2, -10, -77];
//     const expected = [-77, -11, -10, -2];
//     const actual = mergeSort(array);
//     assert.deepEqual(actual, expected);
//   })

//   it('should sort neg and pos numbers', () =>{
//     let array = [-11, 7, -10, 100];
//     const expected = [-11, -10, 7, 100];
//     const actual = mergeSort(array);
//     assert.deepEqual(actual, expected);
//   })

//   it('should sort an array of lower case letters', () =>{
//     let array = ['z', 'a', 'w', 'b'];
//     const expected = ['a', 'b', 'w', 'z'];
//     const actual = mergeSort(array);
//     assert.deepEqual(actual, expected);
//   })

//   it('should sort an array of upper case letters', () =>{
//     let array = ['Z', 'A', 'W', 'B'];
//     const expected = ['A', 'B', 'W', 'Z'];
//     const actual = mergeSort(array);
//     assert.deepEqual(actual, expected);
//   })

//   it('should sort an array of lenght: 4, range: 1-100', () =>{
//     var randoms = Array.from({length: 4}, () => Math.floor(Math.random() * 100));
//     // const expected = randoms.sort();
//     const actual = mergeSort(randoms);
//   })

//   it('should sort a large array of numbers', () => {
//    const largeArray = [];
//    const min = -1000;
//    const max = 1000;

//    for (let i = 0; i < 1001000; i++) {
//      let number = Math.floor(Math.random() * (max - min)) + min;

//      largeArray.push(number);
//    }

//    let sortedLargeArray = mergeSort(largeArray);

//    for (let i = 1; i < sortedLargeArray.length; i++) {
//      expect(sortedLargeArray[i]).to.be.at.least(sortedLargeArray[i - 1]);
//    }
//  });

// })  