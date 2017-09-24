const assert = require('chai').assert,
  Set = require('./set');

describe('Set', () => {
  let set;

  it('should be initally empty', () => {
    set = new Set();
    assert.equal(set.legnth(), 0);
  });

  it('should be add an element', () => {
    set = new Set();
    set.add('first element')
    assert.equal(set.size(), 1);
  });

  it('should has a value', () => {
    set = new Set();
    set.add(5);
    assert.isTrue(set.has(5));
  });
});
