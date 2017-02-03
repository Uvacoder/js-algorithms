const assert = require('chai').assert,
  Queue = require('./queue');

describe('Queue', () => {
  let queue;
  beforeEach(() => queue = new Queue());

  it('should be initally empty', () => {
    assert.equal(queue.size(), 0);
  });

  it('should add an element', () => {
    assert.isTrue(queue.enqueue('first element'));
    assert.equal(queue.size(), 1);
  })
  it('should return the first element inserted', () => {
    queue.enqueue({ value: 'Object' });
    queue.enqueue('HoHoHO');
    queue.enqueue(30);
    assert.equal(queue.size(), 3);
    assert.deepEqual(queue.dequeue(), { value: 'Object' });
    assert.equal(queue.size(), 2);
  });

  it('should return null is the empty and a dequeue operation is intended', () => {
    assert.isNull(queue.dequeue());
  });
});