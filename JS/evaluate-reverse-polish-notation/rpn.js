function evalRPN(tokens) {
  const stack = [];
  const ops = ['+', '-', '*', '/'];

  for (const tok of tokens) {
    if (!ops.includes(tok)) {
      stack.push(Number(tok));
    }
  }

  return stack[0];
}

console.log(evalRPN(['2', '1', '+', '3', '*']));
