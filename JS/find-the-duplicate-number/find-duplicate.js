function findDuplicate(nums) {
  if (!Array.isArray(nums) || nums.length < 2) {
    throw new Error('invalid input');
  }

  let slow = nums[0];
  let fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

function findDuplicateBrute(nums) {
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) return n;
    seen.add(n);
  }
  return -1;
}

const tests = [
  [1, 3, 4, 2, 2],
  [3, 1, 3, 4, 2],
  [1, 1],
  [2, 5, 9, 6, 9, 3, 8, 9, 7, 1],
];

for (const t of tests) {
  console.log(t.join(','), '->', findDuplicate(t), '(brute:', findDuplicateBrute(t) + ')');
}
