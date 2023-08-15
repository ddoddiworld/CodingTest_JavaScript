function solution(strings, n) {
    // 1. 각 요소에 접근해서 n 번째 문자를 뽑기
    // 2. 그 문자를 기준으로 오름차순 정렬 시키기

    var arr = [];
    // 각 배열 요소 전체 돌리기 위해
    for(var i = 0; i < strings.length; i++) {
        var str =  strings[i].charAt(n); // n번째 문자 뽑기
        arr.push(str + strings[i]); // n번째 문자 + strings 각 요소 더함
    }
    
    var newArr = arr.sort(); // 오름차순으로 정렬

    var answer = [];
    for(var z = 0; z < newArr.length; z++) {
        var str2 = newArr[z].substring(1); // 첫번째 글자 지우기
        answer.push(str2);
    }

    return answer;
}