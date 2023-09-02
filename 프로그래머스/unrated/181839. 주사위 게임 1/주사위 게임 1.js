function solution(a, b) {
  if (a % 2 != 0 && b % 2 != 0) {
    // a와 b 모두 홀수일때
    return a * a + b * b;
  }

  if (a % 2 == 0 && b % 2 == 0) {
    // a와 b 모두 짝수일때
    return Math.abs(a - b);
  }

  if (a % 2 != 0 || b % 2 != 0) {
    // a 또는 b가 홀수일때
    return 2 * (a + b);
  }
}