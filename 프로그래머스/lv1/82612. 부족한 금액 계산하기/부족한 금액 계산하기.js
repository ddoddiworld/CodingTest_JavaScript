function solution(price, money, count) {
    var total = [];
    for (var z = 1; z <= count; z++) {
        total.push(price * z);
    }

    var sum = total.reduce((a, b) => a + b); // 배열안 요소의 합

    if (sum - money == 0 || sum - money < 0) {
        return 0;
    } else {
        return sum - money;
    }
}