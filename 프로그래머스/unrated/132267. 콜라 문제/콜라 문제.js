function solution(a, b, n) {
  let totalCoke = 0;
  let receiveCoke = 0;

  while (n >= a) {
    receiveCoke = parseInt(n / a) * b;
    totalCoke += receiveCoke;
    n = receiveCoke + (n % a);
  }

  return totalCoke;
}