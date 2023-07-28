function solution(n) {
    var result = Math.sqrt(n) % 1 == 0 ? 1 : 2; // Math.sqrt(n) : n의 정수를 판별해주는 메소드

    return result;
}