class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  return true;
}

const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root));
