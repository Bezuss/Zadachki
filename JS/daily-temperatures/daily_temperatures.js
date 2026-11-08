function dailyTemperatures(temps) {
  const result = new Array(temps.length).fill(0);
  const stack = [];
  for (let i = 0; i < temps.length; i++) {
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const prev = stack.pop();
      result[prev] = i - prev;
    }
    stack.push(i);
  }
  return result;
}

function brute(temps) {
  return temps.map((t, i) => {
    for (let j = i + 1; j < temps.length; j++) {
      if (temps[j] > t) return j - i;
    }
    return 0;
  });
}

const samples = [
  [73, 74, 75, 71, 69, 72, 76, 73],
  [30, 40, 50, 60],
  [30, 60, 90],
  [90, 80, 70],
  [],
  [50],
];

for (const s of samples) {
  const fast = dailyTemperatures(s);
  const ok = JSON.stringify(fast) === JSON.stringify(brute(s));
  console.log(JSON.stringify(s), '->', JSON.stringify(fast), ok ? 'ok' : 'MISMATCH');
}
