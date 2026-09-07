function dailyTemperatures(temps) {
  const result = new Array(temps.length).fill(0);
  const stack = [];
  for (let i = 0; i < temps.length; i++) {
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }
  return result;
}

function runTests() {
  const cases = [
    [[73,74,75,71,69,72,76,73], [1,1,4,2,1,1,0,0]],
    [[], []],
    [[30,30,30], [0,0,0]],
    [[89,62,70,58,47,47,46,76,100,70], [8,1,5,4,3,2,1,1,0,0]],
    [[100,90,80,70], [0,0,0,0]],
    [[70,80,90,100], [1,1,1,0]],
  ];
  let failures = 0;
  for (const [input, expected] of cases) {
    const got = dailyTemperatures(input);
    const pass = JSON.stringify(got) === JSON.stringify(expected);
    if (!pass) failures++;
    console.log(pass ? 'pass' : `fail: got ${got} expected ${expected}`);
  }
  console.log(failures === 0 ? 'all passed' : `${failures} failed`);
}

runTests();
