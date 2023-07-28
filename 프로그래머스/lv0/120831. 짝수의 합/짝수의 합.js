function solution(n) {
    var sum = 0;
    for(i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
