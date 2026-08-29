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
  // todo
}

const tree = buildTree([5, 3, 8, 1, 4, 7, 9]);
console.log(tree);
