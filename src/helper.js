/**
 * Randomly split a list into two equal length lists
 */
export function split(list) {
  const len = list.length;
  const half = Math.floor(len / 2);
  list.sort(() => Math.random() - 0.5);
  return [list.slice(0, half), list.slice(half)];
}
