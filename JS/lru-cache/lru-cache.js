class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error('capacity must be a positive integer');
    }
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToFront(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this.remove(node);
    this.addToFront(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this.remove(node);
      this.addToFront(node);
      return;
    }
    const node = new Node(key, value);
    this.map.set(key, node);
    this.addToFront(node);
    if (this.map.size > this.capacity) {
      const lru = this.tail.prev;
      this.remove(lru);
      this.map.delete(lru.key);
    }
  }

  has(key) {
    return this.map.has(key);
  }

  size() {
    return this.map.size;
  }

  keysInOrder() {
    const result = [];
    let node = this.head.next;
    while (node !== this.tail) {
      result.push(node.key);
      node = node.next;
    }
    return result;
  }
}

const c = new LRUCache(2);
c.put(1, 1);
c.put(2, 2);
console.log(c.get(1));
c.put(3, 3);
console.log(c.get(2));
c.put(4, 4);
console.log(c.get(1));
console.log(c.get(3));
console.log(c.get(4));
console.log(c.keysInOrder());

const c2 = new LRUCache(1);
c2.put(5, 50);
console.log(c2.get(5));
c2.put(6, 60);
console.log(c2.get(5));
console.log(c2.get(6));
