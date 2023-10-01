export function createArrayWithRange(n: number) {
  const arr = [];
  for (let i = 1; i < n; i++) {
    arr.push(i);
  }
  return arr;
}