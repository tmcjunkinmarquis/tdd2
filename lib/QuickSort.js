// pick a pivot point, make it the last element of the arrrays
// create a new array for small er than pivot
// another array for greater than pivot

// look at each number and goes to the left or to the right of the pivot
// we now know the pivot is in the exact position in which it should be

// probably works more easily to keep two arrays, but more efficient in one arrays
// so there is a less than array, a geater than array, and the sorted array that starts with the pivot

// look at one of the unsorted arrays, pick a pivot , keep doing the same thing, until nothing left to sort, 
// then merge back to the sorted.

// keep calling the recursion on the less than array and the greater than array, then merge them all back

// leta:

// end is pivot.

// compare zero index to pivot
// put on the correct side into new arrays of greater than and less than

// repeat, end is pivot,
// again less than and greater than arrays

// pivot is always in the right place, regardless