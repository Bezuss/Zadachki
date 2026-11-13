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
    }
    return top;
  }
}

class MedianFinder {
  constructor() {
    this.nums = [];
  }

  addNum(num) {
    this.nums.push(num);
  }

  findMedian() {
    const sorted = [...this.nums].sort((a, b) => a - b);
    const mid = sorted.length >> 1;
    if (sorted.length % 2) return sorted[mid];
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}

const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian());
