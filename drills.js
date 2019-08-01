/* eslint-disable strict */
const LinkedList = require('./linked-lists');

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort ?
//   What is the resulting list that will be sorted after 16 recursive calls to mergesort ?
//   What are the first 2 lists to be merged ?
//   Which two lists would be merged on the 7 th merge ?

// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// 21 1 26 45 29 28 2 9          16 49 39 27 43 34 46 40

// 21 1 26 45    29 28 2 9

// 21 1    26 45

// 21 1 26 45 29 28 2 9          16 49 39 27 43 34 46 40

// 21 1 26 45    29 28 2 9    16 49 39 27      43 34 46 40

// 21 1    26 45    29 28  2 9   16 49   39 27   43 34   46 40

// 21  1   26  45   29  28 2 9   16 49   39 27   43 34   46 40

//breaks all items into singles

// 21 and 1 would be merged first
// 26 45 would be merged second
// 21 1 26 45 29 28 2 9 would be merged on 7

// 1) Suppose you are debugging a quicksort implementation
// that is supposed to sort an array in ascending order.
// After the first partition step has been completed,
// the contents of the array is in the following
// order: 3 9 1 14 17 24 22 20. Which of the following
// statements is correct about the partition step ?
// Explain your answer.

// !!!The pivot could have been 17, but could not have been 14!!!

// because items on the left are less than 14 or 17 and right is more than 14 or 17

// The pivot could have been either 14 or 17
// Neither 14 nor 17 could have been the pivot
// The pivot could have been 14, but could not have been 17

// 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

// When using the last item on the list as a pivot
// When using the first item on the list as a pivot

// 14, 17, 13, 15, 19, 10, 3, 16, 9, (12)

// 10 17 13 15 19 14 3 16 9 12
// 10 3  13 15 19 14 17 16 9 12
// 10 3 9 15 19 14 17 16 13 12
// 10 3 9 12 19 14 17 16 13 15

// 3 10 9 12 19 14 17 16 13 15
// 3 9 10 12 19 14 17 16 13 15
// 3 9 10 12 14 19 17 16 13 15
// 3 9 10 12 14 13 17 16 19 15
// 3 9 10 12 14 13 15 16 19 17

// (14), 17, 13, 15, 19, 10, 3, 16, 9, 12
// 14 17 13 15 19 10 3 12 9 16
// 14 17 13 15 9 10 3 12 19 16
// 14 17 13 12 9 10 3 15 19 16
// 14 3 13 12 9 10 17 15 19 16
// 10 3 13 12 9 (14) 17 15 19 16

// 10 3 13 9 12 14 17 15 19 16
// 10 3 9 13 12 14 17 15 19 16
// 9 3 10 13 12 14 17 15 19 16
// 9 3 10 13 12 14 17 15 16 19
// 9 3 10 13 12 14 16 15 17 19

// Question 3
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}

const arr = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5
];

// console.log(qSort(arr));

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

function mSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
}

// console.log(mSort(arr));

function size(list) {
  let counter = 0;
  while (list.head !== null) {
    counter++;
    list.head = list.head.next;
  }
  return counter;
}

function middleItem(list) {
  let end = list.head;
  let middle = list.head;

  while (end.next !== null && end.next.next !== null) {
    end = end.next.next;
    middle = middle.next;
  }
  console.log(middle);
  return middle.value;
}

// function middleOfList(list) {
//   let currNode = list.head;
//   let size = 0;

//   if(!currNode) return null;
//   if(!currNode.next) {
//     console.log(currNode.value);
//     return currNode;
//   }

//   while(currNode.next !== null) {
//     currNode = currNode.next;
//     size++;
//   }

//   let midpoint = Math.floor(size / 2);
//   currNode = list.head;
//   size = 0;
//   while(size !== midpoint) {
//     currNode = currNode.next;
//     size++;
//   }
//   console.log(currNode.value);
//   return currNode;
// }

const ll = new LinkedList();

ll.insertFirst(1);
ll.insertLast(34);
ll.insertLast(55);
ll.insertLast(22);
ll.insertLast(12);
ll.insertLast(13);
ll.insertLast(65);
ll.insertLast(43);

function display(list) {
  while (list.head !== null) {
    console.log(list.head.value);
    list.head = list.head.next;
  }
}

function linkedMerge(left, right) {
  let result = new LinkedList();

  let resultPointer;
  let leftPointer;
  let rightPointer;

  if (!left.head) {
    leftPointer = left;
  } else {
    leftPointer = left.head;
  }

  if (!right.head) {
    rightPointer = right;
  } else {
    rightPointer = right.head;
  }

  while (leftPointer !== null && rightPointer !== null) {
    let tempNode = null;
    console.log('made it');
    if (leftPointer.value > rightPointer.value) {
      tempNode = rightPointer.value;
      rightPointer = rightPointer.next;
    } else {
      tempNode = leftPointer.value;
      leftPointer = leftPointer.next;
    }

    if (result.head == null) {
      result.head = new Node(tempNode);
      resultPointer = result.head;
    } else {
      resultPointer.next = new Node(tempNode);
      resultPointer = resultPointer.next;
    }
  }

  while (rightPointer) {
    let value = rightPointer.value;
    rightPointer = rightPointer.next;
    resultPointer.next = new Node(value);
    resultPointer = resultPointer.next;
  }

  while (leftPointer) {
    let value = leftPointer.value;
    leftPointer = leftPointer.next;
    resultPointer.next = new Node(value);
    resultPointer = resultPointer.next;
  }
  return result;
}
// while (resultPointer.next) {
//   resultPointer = resultPointer.next;
//   resultPointer.next = rightPointer;
// }

function linkedMergeSort(linkedList) {
  if (!linkedList.head.next) {
    return linkedList.head;
  }

  let slowPtr = linkedList.head;
  let fastPtr = linkedList.head.next;

  while (fastPtr !== null) {
    fastPtr = fastPtr.next;
    if (fastPtr !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next;
    }
  }

  let middle = slowPtr;
  let right = new LinkedList();
  right.head = middle.next;
  middle.next = null;

  let leftList = linkedMergeSort(linkedList);
  let rightList = linkedMergeSort(right);
  // console.log('thisis right', right,'this is left', linkedList);

  return linkedMerge(leftList, rightList);
  // console.log(middle)

  // if (linkedList.next === null) {
  //   return linkedList;
  // }
  // // console.log(linkedList);

  // let count = 0;
  // let countList = linkedList.head;
  // let leftPart = linkedList;
  // let leftPointer = linkedList.head;
  // let rightPart = null;
  // let rightPointer = null;
  // // console.log(countList.next);
  // while (countList.next !== null) {
  //   count++;
  //   countList = countList.next;
  // }

  // let middle = Math.floor(count / 2);
  // let count2 = 0;

  // while (count2 < middle) {
  //   count2++;
  //   leftPointer = leftPointer.next;
  // }

  // rightPart = new LinkedList();
  // rightPart.insertFirst(leftPointer.next);

  // return linkedMerge(linkedMergeSort(leftPart), linkedMergeSort(rightPart.next));

  // if (size(linkedList) <= 1) {
  //   return linkedList;
  // }

  // const middle = middleOfList(linkedList);
  // let left = linkedList;
  // let right = new LinkedList();
  // right.head = middle.next;
  // middle.next = null;

  // left = linkedMergeSort(left);
  // right = linkedMergeSort(right);
  // return linkedMerge(left, right, linkedList);
}

display(linkedMergeSort(ll));
//console.log(linkedMergeSort(ll));

function bucketSort(arr, min, max) {
  const buckets = Array(max - min + 1).fill(0); 
  let bucket; 
  for (let i = 0; i < arr.length; i++) {
    bucket = arr[i] - min; 
    buckets[bucket] += 1; 
  }
  const result = [];
  for (let i = 0; i < buckets.length; i++) { 
    let total = buckets[i]; 
    let num = i + min; 
    for (let j = 0; j < total; j++) {
      result.push(num); 
    }
  }
  return result;
}

//console.log(bucketSort([1,3,4,2,9,5], 1, 9));

function shuffleArray(arr){
  for(let i = 0; i < arr.length; i++){
    let random = Math.floor(Math.random()*arr.length);
    let temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
  }
  return arr;
}

console.log(shuffleArray([1,3,4,2,9,5]));

function sortBooks(arr){
  arr = arr.map(book=>book.toLowerCase());

  qSort(arr);
  return arr;
}

const array = ['abba', 'cat', 'bat', 'DOG', 'zebra', 'echo','beta'];

console.log(sortBooks(array));


