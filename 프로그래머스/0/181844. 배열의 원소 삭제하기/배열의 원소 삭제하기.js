function solution(arr, delete_list) {
    var answer = arr.filter((item) => !delete_list.includes(item));
    return answer;
}