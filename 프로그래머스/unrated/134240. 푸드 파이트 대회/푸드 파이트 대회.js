function solution(food) {
  let answer = "";
  for (let i = 0; i < food.length; i++) {
    // i를 숫자 -> 문자열로 변경 후 나눈 값 만큼 반복 한다.
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }

    // reverse 메서드는 기존 배열에 영향을 주기 때문에 스프레드 문법을 이용해, 새로운 배열로 만들어서 작업해 주자
  return answer + 0 + [...answer].reverse().join("");
}