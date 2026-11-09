class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
  }

  get(key) {
    for (const item of this.items) {
      if (item.key === key) return item.value;
    }
    return -1;
  }

  put(key, value) {
    this.items.push({ key, value });
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
console.log(cache.get(1));
