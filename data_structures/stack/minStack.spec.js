const assert = require('chai').assert,
  MinStack = require('./minStack');

describe('MinStack', () => {
  let stack;

  it('should be initally empty', () => {
    stack = new MinStack();
    assert.equal(stack.size(), 0);
  });

  it('should add an element', () => {
    stack = new MinStack();
    stack.push('first element')
    assert.equal(stack.size(), 1);
  })

  it('should return the last element inserted', () => {
    stack = new MinStack();
    stack.push('HoHoHO');
    stack.push(30);
    stack.push({ value: 'Object' });
    assert.equal(stack.size(), 3);
    assert.deepEqual(stack.pop(), { value: 'Object' });
    assert.equal(stack.size(), 2);
  });

  it('should peek the last element inserted', () => {
    stack = new MinStack();
    stack.push('HoHoHO');
    stack.push(30);
    stack.push({ value: 'Object' });
    assert.equal(stack.size(), 3);
    assert.deepEqual(stack.peek(), { value: 'Object' });
    assert.equal(stack.size(), 3);
  });

  it('should return null if the stack is empty', () => {
    stack = new MinStack();
    assert.isNull(stack.pop());
  });

  it('should not allow to add over the capacity', () => {
    stack = new MinStack(3);
    stack.push('HoHoHO');
    stack.push(30);
    stack.push({ value: 'Object' });
    stack.push(50);
    assert.equal(stack.size(), 3);
  });

  it('should check if an element is contained', () => {
    stack = new MinStack(3);
    stack.push('HoHoHO');
    stack.push(30);
    assert.isTrue(stack.contains(30));
    assert.isFalse(stack.contains(31));
  });

  it('should check number of pops until match otherwise null', () => {
    stack = new MinStack(6);
    stack.push('HoHoHO');
    stack.push(30);
    stack.push(332);
    stack.push(3213123);
    stack.push('dsadas');
    stack.push({ value: 1 });
    assert.equal(stack.until(30), 5);
  });

  it('should give back the minimun value', () => {
    stack = new MinStack(6);
    stack.push(10);
    stack.push(30);
    stack.push(332);
    stack.push(3213123);
    assert.equal(stack.min(), 10);
    stack.push(9);
    stack.push(10);
    assert.equal(stack.min(), 9);
  });

  it('should give back the minimun value', () => {
    stack = new MinStack(6);
    stack.push(5);
    stack.push(1);
    stack.push(2);
    stack.push(1);
    assert.equal(stack.min(), 1);
    stack.pop();
    assert.equal(stack.min(), 1);
    stack.pop();
    assert.equal(stack.min(), 1);
    stack.pop();
    assert.equal(stack.min(), 5);
  });
});