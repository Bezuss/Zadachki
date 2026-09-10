class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  function helper(node) {
    if (!node) return true;
    if (node.left && node.left.val >= node.val) return false;
    if (node.right && node.right.val <= node.val) return false;
    return helper(node.left) && helper(node.right);
  }
  return helper(root);
}

const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root));

const bad = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
console.log(isValidBST(bad));
