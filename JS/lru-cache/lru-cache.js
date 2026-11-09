class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
  }

  get(key) {
    const idx = this.items.findIndex((item) => item.key === key);
    if (idx === -1) return -1;
    const [item] = this.items.splice(idx, 1);
    this.items.push(item);
    return item.value;
  }

  put(key, value) {
    const idx = this.items.findIndex((item) => item.key === key);
    if (idx !== -1) this.items.splice(idx, 1);
    this.items.push({ key, value });
    if (this.items.length > this.capacity) this.items.shift();
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
