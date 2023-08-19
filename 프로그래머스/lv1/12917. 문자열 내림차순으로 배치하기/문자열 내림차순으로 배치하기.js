function solution(s) {
    // s 의 문자열을 큰 -> 작 정렬 후 새로운 문자열로 리턴
    // 단, 대문자는 소문자 보다 큼

    var arr = [...s];
    arr.sort((a, b) => {
        if (a > b) return -1;
    });

    return arr.join("");
}