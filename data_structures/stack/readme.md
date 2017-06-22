# Stack(LIFO) interface

[Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))

## Notes
* Like the memory stack.
  * Stack frame: an element on the stack.
  * Stackoverflow.
* The stack can accept a capacity.
* Instead of deleting the element from the storage object after when a `pop()` operation is performed, it is assigned to `null`, **better performacen**.
* `size` property optimizes the process of getting the size.

## API

* `push(element)` - Adds a new element to the top of the stack and returns `true` if it has place otherwise return `false`.
* `pop()` - Removes and returns the last element on the top of the stack. If the stack is empty it should return `null`.
* `size()` - Returns the number of items in the stack.
* `peak()` - Returns the last elemented inserted without deleting it.


