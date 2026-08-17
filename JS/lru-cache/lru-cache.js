class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    return this.map.get(key);
  }

  put(key, value) {
    this.map.set(key, value);
  }
}

const c = new LRUCache(2);
c.put(1, 1);
c.put(2, 2);
console.log(c.get(1));
