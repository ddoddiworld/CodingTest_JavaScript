function solution(phone_number) {
    var len = phone_number.length - 4; // 뒤에서 4번째
    
    return "*".repeat(len) + phone_number.substr(phone_number.length-4); // * 4개 + 뒤의 4글자를 제거
}