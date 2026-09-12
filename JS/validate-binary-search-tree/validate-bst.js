class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  function helper(node, min, max) {
    if (!node) return true;
    if (min !== null && node.val <= min) return false;
    if (max !== null && node.val >= max) return false;
    return helper(node.left, min, node.val) && helper(node.right, node.val, max);
  }
  return helper(root, null, null);
}

function isValidBSTIterative(root) {
  const stack = [];
  let prev = null;
  let node = root;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    if (prev !== null && node.val <= prev) return false;
    prev = node.val;
    node = node.right;
  }
  return true;
}

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const nodes = arr.map(v => (v === null ? null : new TreeNode(v)));
  let childIndex = 1;
  for (let i = 0; i < nodes.length && childIndex < nodes.length; i++) {
    if (!nodes[i]) continue;
    if (childIndex < nodes.length) nodes[i].left = nodes[childIndex++];
    if (childIndex < nodes.length) nodes[i].right = nodes[childIndex++];
  }
  return nodes[0];
}

const cases = [
  [2, 1, 3],
  [5, 1, 4, null, null, 3, 6],
  [10, 5, 20, 1, 15],
  [1],
  [2, 2, 3],
  [],
];

for (const c of cases) {
  const tree = buildTree(c);
  console.log(JSON.stringify(c), isValidBST(tree), isValidBSTIterative(tree));
}
