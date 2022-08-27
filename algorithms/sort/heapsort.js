const { MaxHeap } = require('../../data_structures/heap/max_heap');

/**
 * Heapsort implementation.
 *
 * Sort a list of elements in ascending order in-place.
 *
 * Complexity analysis:
 * Time O(n*log(n)) Space O(1)
 */
const heapsort = (arr) => {
  const heap = new MaxHeap();
  heap.buildHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    heap.swap(0, i);
    heap.removeLast();
    heap.heapifyDown(0);
  }
  return heap.values;
};

module.exports = { heapsort };
