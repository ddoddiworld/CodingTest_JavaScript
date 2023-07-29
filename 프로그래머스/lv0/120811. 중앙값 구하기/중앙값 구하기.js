function solution(array) {
    // 배열 안 요소를 오름차순으로 만들기
    // 배열 안 요소의 가운데 찾기

    array.sort(function(a,b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    })

    var mid = Math.floor(array.length / 2);
    return array[mid];
}