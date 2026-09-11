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

const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root), isValidBSTIterative(root));

const bad = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
console.log(isValidBST(bad), isValidBSTIterative(bad));

const tricky = new TreeNode(10, new TreeNode(5, new TreeNode(1), new TreeNode(15)), new TreeNode(20));
console.log(isValidBST(tricky), isValidBSTIterative(tricky));

const single = new TreeNode(1);
console.log(isValidBST(single), isValidBSTIterative(single));

const dup = new TreeNode(2, new TreeNode(2), new TreeNode(3));
console.log(isValidBST(dup), isValidBSTIterative(dup));
