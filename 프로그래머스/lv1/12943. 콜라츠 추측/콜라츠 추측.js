function solution(num) {
    if (num == 1) return 0;

    var cnt = 0; // 몇번이나 반복해야 하는지

    // 500번 반복할 때까지 1 됨
    for (var i = 1; i <= 500; i++) {
        if (num % 2 == 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        cnt++;
        if (num == 1) return cnt; // 1이 되면 끝
    }
    // 500번 반복할 때까지 1 안됨
    return -1;
}