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

function kthSmallest(root, k) {
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

const tree = buildTree([5, 3, 8, 1, 4, 7, 9]);
console.log(kthSmallest(tree, 3));
console.log(kthSmallest(tree, 1));
console.log(kthSmallest(tree, 7));
