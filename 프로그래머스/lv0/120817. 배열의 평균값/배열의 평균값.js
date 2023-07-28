function solution(numbers) {
    // 1. 배열 안 요소들끼리의 총 합.
    // 2. 총 합에서 배열 안 요소 길이를 나눈다.
    var result = 0;

    for(var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    
    return result / numbers.length;
}