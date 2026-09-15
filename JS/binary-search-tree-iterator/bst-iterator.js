class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BSTIterator {
  constructor(root) {
    this.stack = [];
    this.root = root;
  }

  next() {
  }

  hasNext() {
  }
}

const root = new TreeNode(7);
root.left = new TreeNode(3);
root.right = new TreeNode(15);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(20);

const it = new BSTIterator(root);
console.log(it);
