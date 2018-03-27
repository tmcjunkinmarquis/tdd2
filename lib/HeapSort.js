// given an unsorted array, can be represented as a heap: made of nodes, each has 2 children.  cannot start a new row unitl all the spots are taken.

// about the values: there is a mathematical formula to determine the parent and children nodes based on the unsorted array.

// jot down the indices under the array to be sorted:

// to make the heap, zero index is top of heap, then fill in the heap in order, left child branch, right child branch, left child below that, etc.

// to look at the math,  2 * index plus one is the index of the left child;
// 2 * the index plus two is the index of the right child;
// i is the index of the parent;

// so that works for all of the parents

// once we have the heap visualization, we can turn it into a max heap,

// swaps until the biggest number is the top of the heap.

// take the parent and compare with the children.  if the childrene are larger, either or both, swap the parent with the larger of the two childrene

// swap the two values (in the heap and in the array)  repeat the process for all of the parents, going down row by row(probably?)

// dont forget to change in the arrray to


// start at the top of the heap again, do the swaps again, until you have a max heap - all the parent nodes are larger than the child nodes
