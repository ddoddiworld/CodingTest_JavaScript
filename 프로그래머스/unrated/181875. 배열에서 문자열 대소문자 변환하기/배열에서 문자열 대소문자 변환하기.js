function solution(strArr) {
    // 배열의 홀수번째 -> 대문자 1, 3
    // 배열의 짝수번째 -> 소문자 0 ,2
    var result = [];
    for (var i = 0; i < strArr.length; i++) {
        if (i % 2 == 0 || i == 0) {
            result.push(strArr[i].toLowerCase());
        } else {
            result.push(strArr[i].toUpperCase());
        }
    }
    return result;
}
