class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
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
    if (!this.hasNext()) return null;
    const node = this.stack.pop();
    if (node.right) {
      this.pushLeft(node.right);
    }
    return node.val;
  }

  hasNext() {
    return this.stack.length > 0;
  }

  peek() {
    if (!this.hasNext()) return null;
    return this.stack[this.stack.length - 1].val;
  }
}

function buildTree(values) {
  const nodes = values.map(v => (v === null ? null : new TreeNode(v)));
  for (let i = 0; i < nodes.length; i++) {
    if (!nodes[i]) continue;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < nodes.length) nodes[i].left = nodes[left];
    if (right < nodes.length) nodes[i].right = nodes[right];
  }
  return nodes[0] || null;
}

const root = buildTree([7, 3, 15, 1, 5, 9, 20]);
const it = new BSTIterator(root);
const result = [];
while (it.hasNext()) {
  result.push(it.next());
}
console.log(result);

const empty = new BSTIterator(null);
console.log(empty.hasNext(), empty.next());
