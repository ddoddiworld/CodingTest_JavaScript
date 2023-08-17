function solution(n) {
    var arr = [];
    // 약수 구하기 위한 for문
    for(var i = 0; i <= n; i++) {
        if(n % i == 0){
            arr.push(i);
        }
    }

    // 구한 약수들을 모두 더하기 위한 for문
    var result = 0;
    for(var z = 0; z < arr.length; z++) {
        result += arr[z];
    }
    return result;
}