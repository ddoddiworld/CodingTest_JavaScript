function solution(array, n) {
    var answer = 0;
    
    for(var i = 0; i < array.length; i++) {
        array[i] == n ? answer++ : 0
    }

    return answer;
}