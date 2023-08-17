function solution(n) {
    var arr = (n + '').split('');
    var result = arr.map(Number);
    return result.reverse();
}