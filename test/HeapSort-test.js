const chai = require('chai');
const assert = chai.assert;

const HeapSort = require('../lib/HeapSort');

describe('HeapSort', function () {
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