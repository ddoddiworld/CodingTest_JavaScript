function solution(sides) {
    // 가장 긴 변 찾기
    var maxVal = Math.max(...sides);
    var remain = [];

    for(var i = 0 ; i < sides.length; i ++) {
        if(sides[i] == maxVal) continue; // maxVal 값 만나면 건너뛰기 = 제외
        remain.push(sides[i]); // 나머지 요소 2개 구하기
    }

    var result = remain[0] + remain[1];

    if (maxVal >= result) { // 가장 긴 변 길이 < 다른 두 변의 길이의 합 비교
        return 2
    } else {
        return 1
    }
}