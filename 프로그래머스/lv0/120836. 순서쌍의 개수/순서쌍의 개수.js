function solution(n) {
    var result = [];
    for(var i = 0; i <= n; i++) {
        if (n % i == 0) {
            result.push(i);
        }
    }
    return result.length;
}