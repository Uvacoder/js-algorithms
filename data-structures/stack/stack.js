'use strict';

function Stack (capacity) {
  this._size = 0;
  this._storage = {};
  this._capacity = capacity || Infinity;
}

// O(1)
Stack.prototype.size = function () {
  return this._size;
}

// O(1)
Stack.prototype.push = function (data) {
  if (data === undefined || this._size === this._capacity) return false;
  this._storage[this._size++] = data;
  return this._size;
}

// O(1)
Stack.prototype.pop = function () {
  if (this._size === 0) return null;

  const data = this._storage[this._size - 1];
  this._storage[--this._size] = null;

  return data;
}

// O(1)
Stack.prototype.peek = function () {
  return this._storage[this._size - 1];
}

// O(n)
Stack.prototype.contains = function (input) {
  for (let i = 0; i < this._size; i++) {
    if (isEqual(input, this._storage[i]))
      return true;
  }
  return false;
}

// O(n)
Stack.prototype.until = function (input) {
  for (let i = this._size - 1; i >= 0; i--) {
    if (isEqual(input, this._storage[i]))
      return this._size - i;
  }
  return null;
}

module.exports = Stack;


// Private
function isEqual (a, b) {
  return (typeof a !== 'object' && b === a) ||
    (typeof a === 'object' && JSON.stringify(a) === JSON.stringify(b));
}