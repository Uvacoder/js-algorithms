const assert = require('chai').assert,
  Queue = require('./queue');

describe('Queue', () => {
  let queue;
  beforeEach(() => queue = new Queue());

  it('should be initally empty', () => {
    assert.equal(queue.size(), 0);
  });

  it('should add an element', () => {
    assert.equal(queue.enqueue('first element'), 1);
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

  it('should check if an element is contained', () => {
    queue = new Queue(3);
    queue.enqueue('HoHoHO');
    queue.enqueue(30);
    assert.isTrue(queue.contains(30));
    assert.isFalse(queue.contains(31));
  });

  it('should check number of pops until match otherwise null', () => {
    queue = new Queue(6);
    queue.enqueue('HoHoHO');
    queue.enqueue(30);
    queue.enqueue(332);
    queue.enqueue(3213123);
    queue.enqueue('dsadas');
    queue.enqueue({ value: 1 });
    assert.equal(queue.until(30), 5);
  });
});