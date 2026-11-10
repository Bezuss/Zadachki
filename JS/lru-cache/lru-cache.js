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
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  unlink(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  pushFront(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) return -1;
    this.unlink(node);
    this.pushFront(node);
    return node.value;
  }

  put(key, value) {
    const existing = this.map.get(key);
    if (existing) {
      existing.value = value;
      this.unlink(existing);
      this.pushFront(existing);
      return;
    }
    const node = new Node(key, value);
    this.map.set(key, node);
    this.pushFront(node);
    if (this.map.size > this.capacity) {
      const last = this.tail.prev;
      this.unlink(last);
      this.map.delete(last.key);
    }
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));

const single = new LRUCache(1);
single.put(5, 10);
single.put(5, 20);
console.log(single.get(5));
single.put(6, 30);
console.log(single.get(5));
