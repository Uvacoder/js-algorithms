# Stack(LIFO) interface

[Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))

## Notes
* Like the memory stack.
  * Stack frame: an element on the stack
* We can define a capacity for the stack.

## API/operation methods

* `push(element)` - Adds a new element to the top of the stack and returns `true`.
* `pop()` - Removes and returns the last element on the top of the stack. If the stack is empty it should return `null`.
* `size()` - Returns the number of items in the stack.
* `peak()` - Returns the last elemented inserted without deleting it.

## Build
* Instead of deleting the element from the storage object after when a `pop()` operation is performed, it is assigned to `null`, **better performacen**.
* Having a `size` property optimezes the process of getting the size.j


## Uses
* JS call stack
  * Stackoverflow!


## Complexity
