function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function randomPivotIndex(lo, hi) {
  return lo + Math.floor(Math.random() * (hi - lo + 1));
}

function partition(arr, lo, hi) {
  const pivotIndex = randomPivotIndex(lo, hi);
  swap(arr, pivotIndex, hi);
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
  while (lo < hi) {
    const p = partition(arr, lo, hi);
    if (p === target) return arr[p];
    if (p < target) lo = p + 1;
    else hi = p - 1;
  }
  return arr[lo];
}

function kthLargest(nums, k) {
  if (k < 1 || k > nums.length) throw new Error('k out of range');
  const arr = [...nums];
  const target = arr.length - k;
  return quickselect(arr, 0, arr.length - 1, target);
}

console.log(kthLargest([3,2,1,5,6,4], 2));
console.log(kthLargest([3,2,3,1,2,4,5,5,6], 4));
console.log(kthLargest([1], 1));
console.log(kthLargest([7,7,7,7], 2));
console.log(kthLargest([9,3,2,4,8], 5));
