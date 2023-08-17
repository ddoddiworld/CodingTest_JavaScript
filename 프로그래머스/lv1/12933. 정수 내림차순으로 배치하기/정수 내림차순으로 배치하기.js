function solution(n) {
    var a = (n + '').split('');
    var arr = a.map(Number);

    arr.sort(function(a,b){
        return b - a; // 내림차순 정렬
    });
    
    var result = Number(arr.join(''));
    return result;
}