function subarraySumSlow(nums, k) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum === k) count++
    }
  }
  return count
}

function subarraySum(nums, k) {
  const seen = new Map()
  let sum = 0
  let count = 0
  for (const n of nums) {
    sum += n
    if (seen.has(sum - k)) count += seen.get(sum - k)
    seen.set(sum, (seen.get(sum) || 0) + 1)
  }
  return count
}

console.log(subarraySumSlow([1, 1, 1], 2))
console.log(subarraySum([1, 1, 1], 2))
console.log(subarraySum([1, 2, 3], 3))
