function solution(n, k) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        if (i % k == 0) {
            arr.push(i);
        }
    }
    return arr;
}