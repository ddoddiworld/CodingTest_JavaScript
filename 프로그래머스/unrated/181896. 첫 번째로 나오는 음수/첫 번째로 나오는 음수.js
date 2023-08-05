function solution(num_list) {
    for(var i = 0; i < num_list.length; i++) {
        if(( num_list[i] < 0 )) return i;
    }
    return -1;
}