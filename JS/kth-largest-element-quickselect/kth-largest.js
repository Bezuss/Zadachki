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

function quickselect(arr, lo, hi, target) {
  if (lo === hi) return arr[lo];
  const p = partition(arr, lo, hi);
  if (p === target) return arr[p];
  if (p < target) return quickselect(arr, p + 1, hi, target);
  return quickselect(arr, lo, p - 1, target);
}

function kthLargest(nums, k) {
  const arr = [...nums];
  const target = arr.length - k;
  return quickselect(arr, 0, arr.length - 1, target);
}

console.log(kthLargest([3,2,1,5,6,4], 2));
console.log(kthLargest([3,2,3,1,2,4,5,5,6], 4));
