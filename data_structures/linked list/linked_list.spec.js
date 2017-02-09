const assert = require('chai').assert,
  LinkedList = require('./linked_list');


describe('Linked List', () => {
  let linkedList;
  beforeEach(() => linkedList = new LinkedList());

  it(`it should be initially empty`, () => {
    assert.isNull(linkedList.top);
  });

  it(`it should add a new value to the head`, () => {
    linkedList.addToHead("Hello World!");
    assert.deepEqual(linkedList.top, { value: "Hello World!", next: null });
  });

  it(`it should add two values to the head`, () => {
    linkedList.addToHead("Hello World!");
    linkedList.addToHead("Bye World!");
    assert.equal(linkedList.size, 2);
    assert.deepEqual(linkedList.top.value, "Bye World!");
  });

  it(`it should add two values to the head and one to the tail`, () => {
    linkedList.addToHead("Hello World!");
    linkedList.addToHead("Bye World!");
    linkedList.addToTail("To the tail!!");
    assert.equal(linkedList.size, 3);
    assert.deepEqual(linkedList.print(), "Bye World! -> Hello World! -> To the tail!!");
  });

  it(`it should add an elment to the top if it is empty`, () => {
    linkedList.addToTail("Tail and Head are the same");
    assert.deepEqual(linkedList.print(), "Tail and Head are the same");
  });

  it(`it should remove the head`, () => {
    linkedList.addToHead("Head");
    linkedList.addToTail("Tail");
    linkedList.addToTail("More tail");
    assert.deepEqual(linkedList.print(), "Head -> Tail -> More tail");
    assert.equal(linkedList.removeHead(), "Head")
    assert.deepEqual(linkedList.print(), "Tail -> More tail");
  });

  it(`it should return null if it is empty`, () => {
    assert.isNull(linkedList.removeHead());
  });

  it(`it should contain the value`, () => {
    linkedList.addToHead("Head");
    linkedList.addToTail("Tail");
    linkedList.addToTail("More tail");
    assert.isTrue(linkedList.contains("Tail"));
    assert.isFalse(linkedList.contains('More'));
  });
});