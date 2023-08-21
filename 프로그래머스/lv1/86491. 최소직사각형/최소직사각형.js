function solution(sizes) {
    // a > b 비교. a에 큰 수가 오도록 수정
    for (var i = 0; i < sizes.length; i++) {
        var a = sizes[i][0];
        var b = sizes[i][1];

        if (b > a) {
            sizes[i] = [b, a]; // b가 a보다 크면 자리를 바꿔준다.
        } else if (b == a) {
            sizes[i] = [a, b]; // 숫자가 동일하면 그대로.
        } else {
            sizes[i] = [a, b]; // a가 b보다 크면 그대로.
        }
    }

    // a 와 b 각각을 배열로 담음
    let arrA = [];
    let arrB = [];
    sizes.forEach((a, j) => {
        arrA.push(sizes[j][0]);
        arrB.push(sizes[j][1]);
    });

    // a와 b 각각의 가장 큰 수 뽑기
    let maxA = Math.max(...arrA);
    let maxB = Math.max(...arrB);

    return maxA * maxB;
}