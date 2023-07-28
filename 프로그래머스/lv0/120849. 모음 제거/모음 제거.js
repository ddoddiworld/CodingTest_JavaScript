function solution(my_string) {
    var string_letter = my_string.replaceAll('a','').replaceAll('i','').replaceAll('o','').replaceAll('u','').replaceAll('e','');
    // .replace 1개만 변경
    // .replaceAll 모두 변경
    // 만약 replace , replaceAll 대신 깔끔하게 쓰고 싶다면... 정규식으로 짜야한다고 함.

   return string_letter;
}