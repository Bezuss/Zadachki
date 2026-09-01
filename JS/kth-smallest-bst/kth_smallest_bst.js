class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function insert(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) root.left = insert(root.left, val);
  else root.right = insert(root.right, val);
  return root;
}

function buildTree(values) {
  let root = null;
  for (const v of values) root = insert(root, v);
  return root;
}

function kthSmallestRecursive(root, k) {
  let count = 0;
  let result = null;
  function inorder(node) {
    if (!node || result !== null) return;
    inorder(node.left);
    if (result !== null) return;
    count++;
    if (count === k) {
      result = node.val;
      return;
    }
    inorder(node.right);
  }
  inorder(root);
  return result;
}

function kthSmallestIterative(root, k) {
  const stack = [];
  let node = root;
  let count = 0;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    count++;
    if (count === k) return node.val;
    node = node.right;
  }
  return null;
}

function runTests() {
  const tree = buildTree([5, 3, 8, 1, 4, 7, 9]);
  const cases = [1, 2, 3, 4, 5, 6, 7];
  for (const k of cases) {
    const a = kthSmallestRecursive(tree, k);
    const b = kthSmallestIterative(tree, k);
    console.log(`k=${k} recursive=${a} iterative=${b} match=${a === b}`);
  }

  const single = buildTree([42]);
  console.log(kthSmallestRecursive(single, 1), kthSmallestIterative(single, 1));

  const empty = kthSmallestRecursive(null, 1);
  console.log('empty tree result:', empty);

  const outOfRange = kthSmallestRecursive(tree, 100);
  console.log('out of range:', outOfRange);
}

runTests();
