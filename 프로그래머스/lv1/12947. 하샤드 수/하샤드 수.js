function solution(x) {
    var arr = (x + '').split('');
    var numArr = arr.map(Number); // 배열 요소들 숫자로 변경
    
    var sum = 0;
    for(var i = 0; i < numArr.length; i++) {
        sum += numArr[i];
    }
    
    return (x % sum == 0) ? true : false;
}