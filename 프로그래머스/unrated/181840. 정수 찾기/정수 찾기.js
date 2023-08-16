function solution(num_list, n) {
    var result = num_list.includes(n);
    if(result == true) {
        return 1;
    } else {
        return 0;
    }
}
