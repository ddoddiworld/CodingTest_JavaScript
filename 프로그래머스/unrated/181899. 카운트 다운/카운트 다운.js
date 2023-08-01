function solution(start, end) {
    var result = [];
    for(var i = end; i <= start; i++){
        result.push(i);
    }
    return result.reverse();
}