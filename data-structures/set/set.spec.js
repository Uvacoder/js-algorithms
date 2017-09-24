const assert = require('chai').assert,
  Set = require('./set');

describe('Set', () => {
  let set;

  it('should be initally empty', () => {
    set = new Set();
    assert.equal(set.size(), 0);
  });

  it('should add an element', () => {
    set = new Set();
    set.add('first element');
    assert.equal(set.size(), 1);
  });

  it('should not add twice the same value', () => {
    set = new Set();
    set.add(5);
    set.add('5');
    set.add(5)
    assert.equal(set.size(), 2);
  });

  it('should have a value', () => {
    set = new Set();
    set.add(5);
    assert.isTrue(set.has(5));
    assert.isFalse(set.has('5'));
  });

  it('should not have a value', () => {
    set = new Set();
    set.add('5');
    assert.isFalse(set.has(5));
  });

  it('should remove a value', () => {
    set = new Set();
    set.add(5);
    assert.isTrue(set.has(5));
    set.remove(5);
    assert.isFalse(set.has(5));
    set.add(5);
    assert.isTrue(set.has(5));
  });

  it('should not remove a value with different type', () => {
    set = new Set();
    set.add(5);
    assert.isTrue(set.has(5));
    set.remove('5');
    assert.isTrue(set.has(5));
  });

  it('should return an array with all values', () => {
    set = new Set();
    set.add(5);
    set.add('5');
    set.add(true);
    set.add({ a: 1, b: 2 });
    set.add({ a: 1, b: 2 });
    assert.deepEqual(set.all(), [5, '5', true, { a: 1, b: 2 }]);
  });

  it('should return the union of two sets', () => {
    set = new Set();
    var setB = new Set();
    set.add(5);
    set.add(false);
    setB.add(5);
    setB.add('false');
    setB.add([true]);
    var union = new Set();
    union.add(5);
    union.add(false);
    union.add('false');
    union.add([true]);
    assert.deepEqual(set.union(setB), union);
  });
  it('should return the intersection of two sets', () => {
    set = new Set();
    var setB = new Set();
    set.add(5);
    set.add(false);
    setB.add(5);
    setB.add('false');
    setB.add([true]);
    var intersection = new Set();
    intersection.add(5);
    assert.deepEqual(set.intersection(setB), intersection);
  });

  it('should return the difference of two sets', () => {
    set = new Set();
    var setB = new Set();
    set.add(5);
    set.add(false);
    setB.add(5);
    setB.add('false');
    setB.add([true]);
    var difference = new Set();
    difference.add(false);
    assert.deepEqual(set.difference(setB), difference);
  });
});
