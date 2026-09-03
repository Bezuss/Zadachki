function evalRPN(tokens) {
  const stack = [];
  const ops = new Set(['+', '-', '*', '/']);

  for (const tok of tokens) {
    if (ops.has(tok)) {
      const b = stack.pop();
      const a = stack.pop();
      let res;
      if (tok === '+') res = a + b;
      else if (tok === '-') res = a - b;
      else if (tok === '*') res = a * b;
      else res = a / b;
      stack.push(res);
    } else {
      stack.push(Number(tok));
    }
  }

  return stack.pop();
}

console.log(evalRPN(['2', '1', '+', '3', '*']));
console.log(evalRPN(['4', '13', '5', '/', '+']));
