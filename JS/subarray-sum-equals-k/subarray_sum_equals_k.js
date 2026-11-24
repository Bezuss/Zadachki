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
  const seen = new Map([[0, 1]])
  let sum = 0
  let count = 0
  for (const n of nums) {
    sum += n
    count += seen.get(sum - k) || 0
    seen.set(sum, (seen.get(sum) || 0) + 1)
  }
  return count
}

function randomArray(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 11) - 5)
}

console.log(subarraySum([1, 1, 1], 2))
console.log(subarraySum([1, 2, 3], 3))
console.log(subarraySum([], 0))
console.log(subarraySum([0, 0, 0], 0))
console.log(subarraySum([-1, -1, 1], 0))

let ok = true
for (let t = 0; t < 500; t++) {
  const nums = randomArray(Math.floor(Math.random() * 15))
  const k = Math.floor(Math.random() * 7) - 3
  if (subarraySum(nums, k) !== subarraySumSlow(nums, k)) {
    ok = false
    console.log('mismatch', nums, k)
    break
  }
}
console.log(ok ? 'random tests passed' : 'random tests failed')
