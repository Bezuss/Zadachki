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
    this.pushLeft(root);
  }

  pushLeft(node) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }

  next() {
    const node = this.stack.pop();
    if (node.right) {
      this.pushLeft(node.right);
    }
    return node.val;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}

const root = new TreeNode(7);
root.left = new TreeNode(3);
root.right = new TreeNode(15);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(20);

const it = new BSTIterator(root);
while (it.hasNext()) {
  console.log(it.next());
}
