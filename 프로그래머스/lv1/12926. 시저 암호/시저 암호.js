function solution(s, n) {
    // 주어진 문자열을 한 문자씩 순회하면서
    // 각 문자를 유니코드 값으로 변환하고
    // 주어진 거리만큼 더한 후 다시 문자로 변환합니다.
    // 알파벳의 범위를 초과하는 경우에는 알파벳 순환을 고려해야 합니다.
    // (예를 들어 'z'를 1만큼 오른쪽으로 밀면 'a'가 되어야 합니다.)
    // 대문자와 소문자를 구분하여 처리해야 합니다.

    // 참고사항
    // 알파벳 a - z 의 총 갯수 : 26개
    // A - Z : 65 - 90 까지
    // a - z : 97 - 122

    var answer = "";

    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        var unicode = char.charCodeAt(0);
        if (char >= "a" && char <= "z") {
            // a ~ z 범위 안일때
            unicode =
                ((unicode - "a".charCodeAt(0) + n) % 26) + "a".charCodeAt(0);
        } else if (char >= "A" && char <= "Z") {
            // A ~ Z 범위 안일때
            unicode =
                ((unicode - "A".charCodeAt(0) + n) % 26) + "A".charCodeAt(0);
        } else if (char == "") {
            // 공백 처리
            answer += "";
        }
        answer += String.fromCharCode(unicode);
    }

    return answer;
}