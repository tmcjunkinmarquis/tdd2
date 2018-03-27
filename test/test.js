const chai = require('chai');
const expect = chai.expect;

const MergeSort = require('../lib/MergeSort');

describe('MergeSort', function () {
  var block;

  beforeEach(function () {
    block = new Block(10, 10, 20, 20, 'blue');
  });

  it('has properties', function () {
    assert.equal(block.x, 10);
    assert.equal(block.y, 10);
    assert.equal(block.width, 20);
    assert.equal(block.height, 20);
    assert.equal(block.color, 'blue')
  })
      
}); 
