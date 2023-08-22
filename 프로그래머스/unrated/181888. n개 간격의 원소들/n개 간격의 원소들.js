function solution(num_list, n) {
    var result = [];
    num_list.reduce((acc, curr, index) => {
        if (index % n == 0) {
            result.push(curr);
        }
    });
    return [num_list[0], ...result];
}