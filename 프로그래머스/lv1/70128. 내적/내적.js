function solution(a, b) {
    // reduce
    // acc : 누적 값
    // val : acc에 val을 계속 넣어서 계산해줌(여기선 덧셈) acc = acc+= val
    // idx : 배열의 인덱스
    // 0 을 붙인 이유는 초기값. 초기값은 왜 붙이냐면 계산하면서 값에 영향을 미치지 때문
    return a.reduce((acc, val, idx) => acc + val * b[idx], 0);
}
