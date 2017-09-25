'use strict';

var stringifier = JSON.stringify;

function Set(capacity) {
  this._storage = {};
  this._size = 0;
  this._capacity = capacity || Infinity;
}

// O(1)
Set.prototype.add = function (value) {
  if (
    value === undefined ||
    this._size === this._capacity ||
    notUndefinedNorNull(this._storage, value)
  ) return;

  this._storage[stringifier(value)] = value;
  this._size++;
}

// O(~1) - stringify thing
Set.prototype.has = function (value) {
  var key = stringifier(value);
  return key in this._storage && notUndefinedNorNull(this._storage, value);
}

// O(1)
Set.prototype.size = function () {
  return this._size;
}

// O(1)
Set.prototype.remove = function (value) {
  this._storage[stringifier(value)] = null;
}

// O(n)
Set.prototype.all = function () {
  var arr = [];
  for (var key in this._storage) {
    if (this._storage.hasOwnProperty(key))
      arr.push(this._storage[key]);
  }

  return arr;
}

// O(n)
Set.prototype.union = function (set) {
  var concat = this.all().concat(set.all());
  return concat.reduce(function (acc, val) {
    acc.add(val);
    return acc;
  }, new Set);
}

// O(n) 
Set.prototype.intersection = function (set) {
  var concat = this.all().concat(set.all());

  return concat.reduce(function (acc, val) {
    if (this.has(val)
      && set.has(val)
      && !acc.has(val)
    )
      acc.add(val);

    return acc;
  }.bind(this), new Set());
}

// O(n)
Set.prototype.difference = function (set) {
  var concat = this.all().concat(set.all());
  return concat.reduce(function (acc, val, index) {
    if (!set.has(val)) acc.add(val);
    return acc;
  }, new Set());
}

module.exports = Set;

function notUndefinedNorNull(obj, value) {
  var key = stringifier(value);
  return obj[key] !== undefined && obj[key] !== null;
}
