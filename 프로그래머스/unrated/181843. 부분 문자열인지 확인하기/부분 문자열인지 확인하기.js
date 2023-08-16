function solution(my_string, target) {
    var result = my_string.includes(target);
    if(result == true) {
        return 1
    } else {
        return 0;
    }
}