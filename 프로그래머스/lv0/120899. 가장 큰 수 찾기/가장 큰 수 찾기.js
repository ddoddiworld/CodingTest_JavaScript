function solution(array) {
  let answer = [];
  let a = array[0];
  for (let i = 0; i < array.length; i++) {
    if (a < array[i]) {
      a = array[i];
    }
  }
  answer.push(a);
  answer.push(array.indexOf(a));
  return answer;
}

