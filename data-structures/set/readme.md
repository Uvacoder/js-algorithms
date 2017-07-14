## Set

[Sets](https://en.wikipedia.org/wiki/Set_(abstract_data_type))

Implementation:
- `add(value)` - Adds a value to the set and returns `true`.
- `contains(value)` - Returns a boolean, reflecting whether the value can be found in the set.
- `remove(value)` - Deletes a value from the set and returns `true`.

- Extra functionality:
  - A value can belong to more than one set, and for each value you can say what sets it belongs to.
  - You can find the intersection of multiple sets (a list of the values that they share).
  - In the two tasks above there’s a trade-off between space (memory) and time (computation), can you figure out the possible implementations?