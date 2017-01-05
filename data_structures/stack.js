const assert = require( 'chai' ).assert;

describe('Data Structures', () => {
   describe('1. Stack', () => {
       let stack;
       beforeEach(() => stack = new Stack());

       it('should be initally empty', () => { 
           assert.equal(stack.size(), 0);
       });

       it('should add an element', () => {
           stack.push("first element");
           assert.equal(stack.size(), 1);
       })
       it('should return the last element inserted', () => {
           stack.push({value: "Object"});
           stack.push("HoHoHO");
           stack.push(30);
           assert.equal(stack.size(), 3);
           assert.equal(stack.pop(), 30);
           assert.equal(stack.size(), 2);
       });

       it('should not break if we do a pop with an empty stack', () => {
           stack.pop();
           stack.push(3);
           assert.equal(stack.size(), 1);
       });
   });
});



function Stack() {
    this._size = 0;
    this._storage = {};
}

Stack.prototype.size = function() {
    return this._size;
}

Stack.prototype.push = function(val) {
    this._storage[this._size] = val;
    this._size ++;
}

Stack.prototype.pop = function() {
    if(this._size === 0) return;
    let val = this._storage[this._size - 1];
    this._size --;
    
    return val;
}






