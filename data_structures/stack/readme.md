# Stack(LIFO)

[Stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))

Implementation:

- `push(string)` - Adds a string to the top of the stack and returns `true`.
- `pop()` - Removes and returns the string on the top of the stack. If the stack is empty it should return `null`.
- `size()` - Returns the number of items in the stack.

## Notes:
Instead of deleting the element from the storage object after when a `pop()` operation is performed, it is assigned to
`null`. Performance improvement.