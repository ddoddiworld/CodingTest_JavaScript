function solution(numbers, n) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (sum <= n) {
      sum += numbers[i];
    }
  }
  return sum;
}