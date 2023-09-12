function solution(a, b) {
  let sum1 = a.toString() + b.toString();
  let sum2 = b.toString() + a.toString();

  return Number(sum1) >= Number(sum2) ? Number(sum1) : Number(sum2);
}
