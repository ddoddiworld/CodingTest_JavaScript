function solution(arr, n) {
  var answer = [];
  var length = " "; // arr 길이가 짝수: true / 홀수 : false
  arr.length % 2 != 0 ? (length = false) : (length = true);

  for (var i = 0; i < arr.length; i++) {
    if (length == false) {
      if (i % 2 == 0) {
        answer.push(arr[i] + n);
      } else {
        answer.push(arr[i]);
      }
    } else {
      if (i % 2 != 0) {
        answer.push(arr[i] + n);
      } else {
        answer.push(arr[i]);
      }
    }
  }
  return answer;
}