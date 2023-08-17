function solution(n){
    var num = (n + '').split('');
    var reNum = num.map(Number);

    var result = 0;
    for (var i = 0; i < reNum.length; i++) {
        result += reNum[i];
    }
    return result;
}