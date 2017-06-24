const Stack = require('./stack');

function MinStack (capacity) {
  this._storage = {};
  this._index = 0;
  this._capacity = capacity || Infinity;
  this._min = new Stack();
}

MinStack.prototype.size = function () {
  return this._index;
}

// O(1)
MinStack.prototype.push = function (data) {
  if (data === undefined || this._index === this._capacity) return false;
  this._min.peek() < data
    ? this._min.push(this._min.peek())
    : this._min.push(data);
  this._storage[this._index++] = data;
  return this._index;
}

// O(1)
MinStack.prototype.pop = function () {
  if (this._index === 0) return null;
  this._min.pop();
  const data = this._storage[this._index - 1];
  this._storage[--this._index] = null;

  return data;
}

// O(1)
MinStack.prototype.peek = function () {
  return this._storage[this._index - 1];
}

// O(1) in terms of speed is faster but takes twice space
MinStack.prototype.min = function () {
  return this._min.peek();
}

// O(n)
MinStack.prototype.contains = function (input) {
  for (let i = 0; i < this._index; i++) {
    if (isEqual(input, this._storage[i]))
      return true;
  }
  return false;
}

// O(n)
MinStack.prototype.until = function (input) {
  for (let i = this._index - 1; i >= 0; i--) {
    if (isEqual(input, this._storage[i]))
      return this._index - i;
  }
  return null;
}

module.exports = MinStack;


// Private
function isEqual (a, b) {
  return (typeof a !== 'object' && b === a) ||
    (typeof a === 'object' && JSON.stringify(a) === JSON.stringify(b));
}
