const assert = require('chai').assert,
  Queue = require('./queue');

describe('Queue', () => {
  let queue;
  beforeEach(() => queue = new Queue());

  it('should be initally empty', () => {
    assert.equal(queue.size(), 0);
  });

  it('should add an element', () => {
    queue.enqueue('first element');
    assert.equal(queue.size(), 1);
  })
  it('should return the last element inserted', () => {
    queue.enqueue({ value: 'Object' });
    queue.enqueue('HoHoHO');
    queue.enqueue(30);
    assert.equal(queue.size(), 3);
    assert.equal(queue.dequeue().value, 'Object');
    assert.equal(queue.size(), 2);
  });

  it('should not break if we do a pop with an empty queue', () => {
    queue.dequeue();
    queue.enqueue(3);
    assert.equal(queue.size(), 1);
  });
});