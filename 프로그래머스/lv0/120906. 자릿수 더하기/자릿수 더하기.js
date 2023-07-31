function solution(n) {
    var num = (n + '').split(''); // 배열 요소로 반환
    var result = 0;
    
    num.forEach((a) => {
        result += Number(a); // string -> number로 변환
    })
    
    return result;
}