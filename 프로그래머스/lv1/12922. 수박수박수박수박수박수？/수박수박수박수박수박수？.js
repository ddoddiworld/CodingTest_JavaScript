function solution(n) {
    var s = '수'; // 홀수일때 추가
    var b = '박'; // 짝수일때 추가

    var result = [];
    for(var i = 1; i <= n; i++) {
        console.log(i);
        if (i % 2 != 0) {
            result.push('수');
        } else {
            result.push('박');
        }
    }
    
    var arr = result.join('');
    return arr;
}