function solution(num_list) {
    // 길이가 11이상이면 원소들을 모두 +
    // 길이가 10이하면 원소들을 모두 *
    if(num_list.length >= 11) {
        var add = 0;

        for(var i = 0; i < num_list.length; i++) {
            add += num_list[i];
        }
        return add;
    } 
    else {
        var multi = 1;

        for(var n = 0; n < num_list.length; n++) {
            multi *= num_list[n];
        }
        return multi;
    }
}