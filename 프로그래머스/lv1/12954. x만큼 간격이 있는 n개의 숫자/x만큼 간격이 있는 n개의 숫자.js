function solution(x, n) {
    var result = [];
    for(var i = 1; i <= n; i++) {
        var b = x * i;
        result.push(b);
    }
    return result;
}