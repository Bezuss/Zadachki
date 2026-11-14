class Heap {
  constructor(compare) {
    this.data = [];
    this.compare = compare;
  }

  get size() {
    return this.data.length;
  }

  peek() {
    return this.data[0];
  }

  push(val) {
    this.data.push(val);
    let i = this.data.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.compare(this.data[i], this.data[parent]) >= 0) break;
      [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
      i = parent;
    }
  }

  pop() {
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length) {
      this.data[0] = last;
      let i = 0;
      const n = this.data.length;
      while (true) {
        let best = i;
        const left = 2 * i + 1;
        const right = left + 1;
        if (left < n && this.compare(this.data[left], this.data[best]) < 0) best = left;
        if (right < n && this.compare(this.data[right], this.data[best]) < 0) best = right;
        if (best === i) break;
        [this.data[i], this.data[best]] = [this.data[best], this.data[i]];
        i = best;
      }
    }
    return top;
  }
}

class MedianFinder {
  constructor() {
    this.low = new Heap((a, b) => b - a);
    this.high = new Heap((a, b) => a - b);
  }

  addNum(num) {
    this.low.push(num);
    this.high.push(this.low.pop());
    if (this.high.size > this.low.size) {
      this.low.push(this.high.pop());
    }
  }

  findMedian() {
    if (this.low.size === 0) return null;
    if (this.low.size > this.high.size) return this.low.peek();
    return (this.low.peek() + this.high.peek()) / 2;
  }
}

function brute(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = sorted.length >> 1;
  if (sorted.length % 2) return sorted[mid];
  return (sorted[mid - 1] + sorted[mid]) / 2;
}

const mf = new MedianFinder();
console.log(mf.findMedian());

const seen = [];
let ok = true;
for (let i = 0; i < 200; i++) {
  const n = Math.floor(Math.random() * 100) - 50;
  seen.push(n);
  mf.addNum(n);
  if (mf.findMedian() !== brute(seen)) ok = false;
}
console.log(ok);

const small = new MedianFinder();
for (const n of [5, 15, 1, 3]) {
  small.addNum(n);
  console.log(small.findMedian());
}
