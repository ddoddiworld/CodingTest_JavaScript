function solution(s) {
    if (s.length % 2 == 0) {
        answer = s.substr(s.length / 2 - 1, 2); // 짝수) 가운데서 2글자 가져오기
    } else {
        answer = s.substr(s.length / 2, 1); // 홀수) 가운데 글자 찾기
    }
    return answer;
}