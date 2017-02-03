const assert = require('chai').assert,
  Stack = require('./stack');

describe('Stack', () => {
  let stack;
  beforeEach(() => stack = new Stack());

  it('should be initally empty', () => {
    assert.equal(stack.size(), 0);
  });

  it('should add an element', () => {
    assert.isTrue(stack.push('first element'));
    assert.equal(stack.size(), 1);
  })

  it('should return the last element inserted', () => {
    stack.push('HoHoHO');
    stack.push(30);
    stack.push({ value: 'Object' });
    assert.equal(stack.size(), 3);
    assert.deepEqual(stack.pop(), { value: 'Object' });
    assert.equal(stack.size(), 2);
  });

  it('should return null if the stack is empty', () => {
    assert.isNull(stack.pop());
  });
});