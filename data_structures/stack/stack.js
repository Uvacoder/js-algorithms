function Stack() {
  this._size = 0;
  this._storage = {};
}

Stack.prototype.size = function() {
  return this._size;
}

Stack.prototype.push = function(data) {
  this._storage[this._size] = data;
  this._size++;
}

Stack.prototype.pop = function() {
  if (this._size === 0) return;

  let data = this._storage[this._size - 1];
  delete this._storage[this._size - 1];
  this._size--;

  return data;
}

module.exports = Stack;