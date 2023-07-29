function solution(n) {
    // 반복문 돌려서 홀수 찾고 오름차순 정렬
    var result = [];

    for (var i = 0; i <= n; i++) {
        if (i % 2 != 0) {
            result.push(i);
        } 
    }

    return result
}