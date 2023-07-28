function solution(my_string, n) {
    var string_length = my_string.length; // string의 길이를 number 로 반환
    var result = "";
    
    for(let i = 0; i < string_length; i++) { // my_string의 길이 만큼 반복문 돌리기 
        for(let num = 0; num < n; num++){ // n 크기 만큼 반복문 돌리기
            result += my_string.charAt(i); // result에 n크기만큼 my_string 글자들을 *n 
            // 참고 : charAt() 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환합니다.
        }
    }
    return result;
}