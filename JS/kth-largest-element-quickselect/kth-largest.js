function kthLargest(nums, k) {
  const sorted = [...nums].sort((a, b) => a - b);
  return sorted[sorted.length - k];
}

console.log(kthLargest([3,2,1,5,6,4], 2));
console.log(kthLargest([3,2,3,1,2,4,5,5,6], 4));
