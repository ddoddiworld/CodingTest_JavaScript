function solution(n) {
  var result = 0;
  for (var i = 0; i <= n; i++) {
    if (n % 2 == 0) {
      if (i % 2 == 0) {
        result += Math.pow(i, 2);
      }
    } else {
      if (i % 2 != 0) {
        result += i;
      }
    }
  }
  return result;
}