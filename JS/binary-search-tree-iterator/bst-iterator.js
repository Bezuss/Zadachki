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

function isSortedOutput(it) {
  const out = [];
  while (it.hasNext()) out.push(it.next());
  return out;
}

const root = buildTree([10, 5, 20, 2, 8, 15, 30]);
const it1 = new BSTIterator(root);
console.log(isSortedOutput(it1));

const it2 = new BSTIterator(root);
console.log(it2.peek(), it2.next(), it2.peek());

const single = new BSTIterator(new TreeNode(42));
console.log(single.hasNext(), single.next(), single.hasNext());

const empty = new BSTIterator(null);
console.log(empty.hasNext(), empty.next());
