function Stack (capacity) {
  this._size = 0;
  this._storage = {};
  this._capacity = capacity || Infinity;
}

Stack.prototype.size = function () {
  return this._size;
}

Stack.prototype.push = function (data) {
  if (data === undefined || this._size === this._capacity) return false;
  this._storage[this._size++] = data;
  return true;
}

Stack.prototype.pop = function () {
  if (this._size === 0) return null;

  const data = this._storage[this._size - 1];
  this._storage[--this._size] = null;

  return data;
}

Stack.prototype.peak = function () {
  return this._storage[this._size - 1];
}

module.exports = Stack;