function dailyTemperatures(temps) {
  const result = new Array(temps.length).fill(0);
  for (let i = 0; i < temps.length; i++) {
    for (let j = i + 1; j < temps.length; j++) {
      if (temps[j] > temps[i]) {
        result[i] = j - i;
        break;
      }
    }
  }
  return result;
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
