function productExceptSelf(nums) {
  const n = nums.length
  const result = new Array(n).fill(1)

  let prefix = 1
  for (let i = 0; i < n; i++) {
    result[i] = prefix
    prefix *= nums[i]
  }

  let suffix = 1
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix
    suffix *= nums[i]
  }

  return result
}

function main() {
  const tests = [
    [1, 2, 3, 4],
    [0, 1, 2],
    [0, 0, 3],
    [-1, 1, 0, -3, 3],
    [5],
    [],
  ]
  for (const t of tests) {
    console.log(JSON.stringify(t), '->', JSON.stringify(productExceptSelf(t)))
  }
}

main()
