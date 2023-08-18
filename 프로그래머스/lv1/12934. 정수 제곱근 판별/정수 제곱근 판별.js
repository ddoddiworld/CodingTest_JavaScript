function solution(n) {
    // sqrt 는 특정숫자의 제곱근 값을 계산해주는 함수입니다.
    // n이 어떤 양의 정수 x의 제곱인지 판단 하고 싶음
    // n이 제곱이 맞으면 x+1의 제곱을 리턴
    // n이 제곱이 아니면 -1을 리턴

    if (Math.sqrt(n) % 1 == 0){ // 제곱근 맞음
        return Math.pow(Math.sqrt(n)+1, 2);
    } else { // 제곱근 아님
        return -1;
    }
}