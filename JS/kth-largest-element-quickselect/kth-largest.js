function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partition(arr, lo, hi) {
  const pivot = arr[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, hi);
  return i;
}

function kthLargest(nums, k) {
  const sorted = [...nums].sort((a, b) => a - b);
  return sorted[sorted.length - k];
}

console.log(kthLargest([3,2,1,5,6,4], 2));
console.log(kthLargest([3,2,3,1,2,4,5,5,6], 4));
