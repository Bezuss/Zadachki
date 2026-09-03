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
      else res = Math.trunc(a / b);
      stack.push(res);
    } else {
      stack.push(Number(tok));
    }
  }

  return stack.pop();
}

function test(tokens, expected) {
  const got = evalRPN(tokens);
  console.log(tokens.join(' '), '=>', got, got === expected ? 'ok' : `FAIL expected ${expected}`);
}

test(['2', '1', '+', '3', '*'], 9);
test(['4', '13', '5', '/', '+'], 6);
test(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'], 22);
test(['-4', '2', '/'], -2);
test(['7', '2', '/'], 3);
