function solution(left, right) {
    // left와 right 사이의 약수를 찾아내기
    // 각각의 약수의 갯수 확인
    // 각각의 약수의 갯수가 짝수 홀수 확인
    // 짝수면 범위의 값을 양수 / 홀수면 범위의 값이 음수
    // 범위 값의 총 합

    // left ~ right 범위를 구함
    var arr = [];
    for (; left <= right; left++) {
        // left ~ right 범위 숫자들 각각의 약수 구하기
        var divide = [];
        for (var i = 1; i <= left; i++) {
            if (left % i == 0) {
                divide.push(i);
            }
        }
        arr.push({ len: divide.length, num: left }); // len 짝홀 하기 위해 , num 범위
    }

    var num = 0;
    arr.forEach((a) => {
        if (a.len % 2 == 0) {
            num += a.num; // 짝수면 양수로
        } else {
            num -= a.num; // 홀수면 음수로
        }
    });
    return num;
}