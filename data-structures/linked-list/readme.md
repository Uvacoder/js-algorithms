# Linked list

[Lists](https://en.wikipedia.org/wiki/Linked_list)

Implementation:

* Each node in the linked list should have a `value` and `next` property. The `next` property of the `tail` node should be `null`.
* The class should provide these shared methods:
	- `addToHead(value)` - Adds a node with the passed value to the beginning of the list.
	- `addToTail(value)` - Adds a node with the passed value to the end of the list`.
	- `removeHead()` - Removes the first node from the list and returns its value. If the list is empty it should return `null`.
	- `contains(value)` - Returns a boolean that reflects whether or not the passed value is in the linked list.
* Upgrade your linked list and make it a so-called “double” linked list. For this you’ll need to add a `previous` property to each node, and upgrade the shared methods accordingly. Then add a new method:
	- `removeTail()` - Removes the last node from the list and return its value.