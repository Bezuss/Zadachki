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
  const values = [];
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    values.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  return values[k - 1];
}

const tree = buildTree([5, 3, 8, 1, 4, 7, 9]);
console.log(kthSmallest(tree, 3));
