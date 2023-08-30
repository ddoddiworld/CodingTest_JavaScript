function solution(s) {
  var arr = [];
  var result = [];

  for (var i = 0; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      // 최초의 요소들은 -1로 넣기
      result.push(-1);
      arr.push(s[i]);
    } else if (arr.includes(s[i])) {
      // 이미 1번 이상 들어간 경우. 자신과 가장 가까운 곳에 있는 같은 글자로 부터의 거리 구하기
      result.push(i - arr.lastIndexOf(s[i]));
      arr.push(s[i]);
    }
  }
    return result
}