# Linked list

[Lists](https://en.wikipedia.org/wiki/Linked_list)

Implementation:

* Each node in the linked list should have a `value` and `next` property. The `next` property of the `tail` node should be `null`.
* The class should provide these shared methods:
	- `addToHead(value)` - Adds a node with the passed value to the beginning of the list and returns `true`.
	- `addToTail(value)` - Adds a node with the passed value to the end of the list and returns `true`.
	- `removeHead()` - Removes the first node from the list and returns its value. If the list is empty it should return `null`.
	- `contains(value)` - Returns a boolean that reflects whether or not the passed value is in the linked list.
* Upgrade your linked list and make it a so-called “double” linked list. For this you’ll need to add a `previous` property to each node, and upgrade the shared methods accordingly. Then add a new method:
	- `removeTail()` - Removes the last node from the list and return its value.
* Every data structure in this exercise should correspond to a class in your code (use the pseudo-classical approach, or the new [ES6 class definition](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)).
* You can assume that the `value` property of each element is a string or a number.