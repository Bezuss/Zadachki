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

const tree = buildTree([5, 3, 8, 1, 4, 7, 9]);
console.log(kthSmallestRecursive(tree, 3));
console.log(kthSmallestIterative(tree, 3));
