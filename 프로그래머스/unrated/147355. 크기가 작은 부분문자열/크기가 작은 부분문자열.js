function solution(t, p) {
    var result = 0;
    for (var i = 0; i <= t.length - p.length; i++) {
        var num = t.substr(i, p.length);
        
        if (Number(num) <= Number(p)){
            result ++;
        }
    }
    return result;
}