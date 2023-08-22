function solution(num_list) {
    var arr = num_list.sort((a, b) => {
        if (a > b) return 1;
        else if (a == b) return 0;
        else return -1;
    });

    return arr.slice(5);
}