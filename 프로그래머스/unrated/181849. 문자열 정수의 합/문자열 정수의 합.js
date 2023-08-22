function solution(num_str) {
    var answer = 0;
    for (var i = 0; i < num_str.length; i++) {
        var d = parseInt(num_str[i]);
        answer += d;
    }
    return answer;
}