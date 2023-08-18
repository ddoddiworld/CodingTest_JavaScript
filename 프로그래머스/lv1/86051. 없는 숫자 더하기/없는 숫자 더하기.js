function solution(numbers) {
    var not = [];
    for (var i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) {
            not.push(i);
        }
    }

    var result = not.reduce((a, b) => a + b); // 각 요소들 더하기
    return result;
}
