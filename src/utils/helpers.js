export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function range(start, end) {
  const ans = [];
  // eslint-disable-next-line
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}
