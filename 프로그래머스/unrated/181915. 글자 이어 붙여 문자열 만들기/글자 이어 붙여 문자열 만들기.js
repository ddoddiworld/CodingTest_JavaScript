function solution(my_string, index_list) {
    var arr = [...my_string];
    var result = [];

    for (var i = 0; i < index_list.length; i++) {
        result.push(arr[index_list[i]]);
    }

    return result.join("");
}