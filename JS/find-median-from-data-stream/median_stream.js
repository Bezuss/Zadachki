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
