function solution(strlist) {
    // 각 원소의 길이를 알아내기
    var result = [];
    for (i of strlist) {
        result.push(i.length);
    }
    return result;
}