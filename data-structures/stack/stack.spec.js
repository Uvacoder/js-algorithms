const assert = require('chai').assert,
  Stack = require('./stack');

describe('Stack', () => {
  let stack;

  it('should be initally empty', () => {
    stack = new Stack();
    assert.equal(stack.size(), 0);
  });

  it('should add an element', () => {
    stack = new Stack();
    stack.push('first element')
    assert.equal(stack.size(), 1);
  })

  it('should return the last element inserted', () => {
    stack = new Stack();
    stack.push('HoHoHO');
    stack.push(30);
    stack.push({ value: 'Object' });
    assert.equal(stack.size(), 3);
    assert.deepEqual(stack.pop(), { value: 'Object' });
    assert.equal(stack.size(), 2);
  });

  it('should peek the last element inserted', () => {
    stack = new Stack();
    stack.push('HoHoHO');
    stack.push(30);
    stack.push({ value: 'Object' });
    assert.equal(stack.size(), 3);
    assert.deepEqual(stack.peek(), { value: 'Object' });
    assert.equal(stack.size(), 3);
  });

  it('should return null if the stack is empty', () => {
    stack = new Stack();
    assert.isNull(stack.pop());
  });

  it('should not allow to add over the capacity', () => {
    stack = new Stack(3);
    stack.push('HoHoHO');
    stack.push(30);
    stack.push({ value: 'Object' });
    stack.push(50);
    assert.equal(stack.size(), 3);
  });

  it('should check if an element is contained', () => {
    stack = new Stack(3);
    stack.push('HoHoHO');
    stack.push(30);
    assert.isTrue(stack.contains(30));
    assert.isFalse(stack.contains(31));
  });

  it('should check number of pops until match otherwise null', () => {
    stack = new Stack(6);
    stack.push('HoHoHO');
    stack.push(30);
    stack.push(332);
    stack.push(3213123);
    stack.push('dsadas');
    stack.push({ value: 1 });
    assert.equal(stack.until(30), 5);
  });
});