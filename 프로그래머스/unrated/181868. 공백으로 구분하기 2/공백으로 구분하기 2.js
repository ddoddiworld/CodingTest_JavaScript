function solution(my_string) {
    var result = [];
    my_string.split(" ").filter((v, idx, arr) => {
        if (v.trim() != "") {
            result.push(v.trim());
        }
    });
    return result;
}