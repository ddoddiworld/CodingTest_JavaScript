function solution(numbers) {
    numbers.sort(function(a, b){
        // 단순 sort()는 유니코드 순서로 정렬시킴. 따라서 함수 파라미터를 받아야함
        return b - a;
    }); 
    var result = numbers[0] * numbers[1];
    return result;
}