function solution(num_list) {
    // 홀수 번째 원소들의 합
    // 짝수 번째 원소들의 합
    // 둘 중 가장 큰 값을 리턴

    var odd = [];
    var even = [];

    for (var i = 0; i < num_list.length; i++) {
        if (i % 2 == 0) odd.push(num_list[i]);
        else even.push(num_list[i]);
    }

    var sumOdd = odd.reduce((a, b) => a + b);
    var sumEven = even.reduce((c, d) => c + d);

    if (sumOdd > sumEven){
        return sumOdd;
    } else if (sumOdd < sumEven){
        return sumEven;
    } else {
        return sumOdd
    }
}
