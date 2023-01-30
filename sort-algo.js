/* 
* How many sorting algorithms do you know?

* Here is the list of the most popular sorting algorithms:

	[ Bubble sort, selection sort, insertion sort, merge sort, quick sort, counting sort, radix sort, bucket sort ]

  * Sorting algorithms classifications based on the time complexity:
		1. O(n^2) algorithms: bubble sort, selection sort, insertion sort
		2. O(n log n) algorithms: merge sort, quick sort
		3. O(n) algorithms: counting sort, radix sort, bucket sort

  * Sorting algorithms classifications based on the space complexity:
		1. In-place algorithms: bubble sort, selection sort, insertion sort, quick sort O(1)
		2. Not in-place algorithms: merge sort, counting sort, radix sort, bucket sort O(n)

  * Sorting algorithms classifications based on the stability:
		1. Stable algorithms: bubble sort, insertion sort, merge sort
		2. Not stable algorithms: selection sort, quick sort, counting sort, radix sort, bucket sort

  * Sorting algorithms classifications based on the internal or external sorting:
		1. Internal sorting: bubble sort, selection sort, insertion sort, merge sort, quick sort
		2. External sorting: counting sort, radix sort, bucket sort

  * Sorting algorithms classifications based on the comparison or non-comparison sorting:
		1. Comparison sorting: bubble sort, selection sort, insertion sort, merge sort, quick sort
		2. Non-comparison sorting: counting sort, radix sort, bucket sort

  * Sorting algorithms classifications based on the recursive or non-recursive sorting:
		1. Recursive sorting: merge sort, quick sort
		2. Non-recursive sorting: bubble sort, selection sort, insertion sort, counting sort, radix sort, bucket sort

  * Sorting algorithms classifications based on the online or offline sorting:
		1. Online sorting: bubble sort, selection sort, insertion sort, merge sort, quick sort
		2. Offline sorting: counting sort, radix sort, bucket sort

  * Sorting algorithms classifications based on the adaptive or non-adaptive sorting:
		1. Adaptive sorting: bubble sort, insertion sort, merge sort, quick sort
		2. Non-adaptive sorting: selection sort, counting sort, radix sort, bucket sort
*/

// Bubble sort
// Time complexity: O(n^2)
// Space complexity: O(1)
function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}

console.log("%c Bubble sort", "font-size: 20px")
console.log(bubbleSort([1, 3, 2, 5, 4]));

// Selection sort
// Time complexity: O(n^2)
// Space complexity: O(1)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log("%c Selection sort", "font-size: 20px")
console.log(selectionSort([1, 3, 2, 5, 4]));

// Insertion sort
// Time complexity: O(n^2)
// Space complexity: O(1)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log("%c Insertion sort", "font-size: 20px")
console.log(insertionSort([1, 3, 2, 5, 4]));

// Merge sort
// Time complexity: O(n log n)
// Space complexity: O(n)

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

console.log("%c Merge sort", "font-size: 20px")
console.log(mergeSort([1, 3, 2, 5, 4]));

// Quick sort
// Time complexity: O(n log n)
// Space complexity: O(log n)

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log("%c Quick sort", "font-size: 20px")
console.log(quickSort([1, 3, 2, 5, 4]));

// Counting sort
// Time complexity: O(n + k)
// Space complexity: O(n + k)

function countingSort(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let count = new Array(max - min + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }
  let result = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      result.push(i + min);
      count[i]--;
    }
  }
  return result;
}

console.log("%c Counting sort", "font-size: 20px")
console.log(countingSort([1, 3, 2, 5, 4]));

// Radix sort
// Time complexity: O(nk)
// Space complexity: O(n + k)

function radixSort(arr) {
  let max = Math.max(...arr);
  let maxDigits = max.toString().length;
  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log("%c Radix sort", "font-size: 20px")
console.log(radixSort([1, 3, 2, 5, 4]));

// Bucket sort
// Time complexity: O(n + k)
// Space complexity: O(n + k)

function bucketSort(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let buckets = Array.from({ length: 10 }, () => []);
  for (let i = 0; i < arr.length; i++) {
    let bucketIndex = Math.floor((arr[i] - min) / 10);
    buckets[bucketIndex].push(arr[i]);
  }
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = insertionSort(buckets[i]);
  }
  return [].concat(...buckets);
}

console.log("%c Bucket sort", "font-size: 20px")
console.log(bucketSort([1, 3, 2, 5, 4]));
