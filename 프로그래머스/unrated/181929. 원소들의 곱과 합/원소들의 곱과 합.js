
function solution(num_list) {
    // 리스트들의 곱
    var result = 1;
    for(var i = 0; i < num_list.length; i++){
        result *= num_list[i];
    }

    // 리스트들의 합
    var result2 = 0;
    for(var i = 0; i < num_list.length; i++){
        result2 += num_list[i];
    }

    if (result > result2*result2) {
        return 0 // 곱 > 합
    } else {
        return 1 // 곱 < 합
    }
}