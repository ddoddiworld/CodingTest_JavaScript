function solution(array, commands) {
    var answer = [];
    // -1을 한 이유는 배열에서의 1번째 숫자와 문제에서의 1번째 숫자 위치가 다름...
    // 문제의 1번째 숫자는 배열의 0번째 숫자 위치
    for (var i = 0; i < commands.length; i++) {
        var num = array
            .slice(commands[i][0] - 1, commands[i][1])
            .sort((a, b) => {
                return a - b;
            });

        answer.push(num[commands[i][2] - 1]);
    }
    return answer;
}