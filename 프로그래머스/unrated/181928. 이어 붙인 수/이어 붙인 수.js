function solution(num_list) {
    // 홀수만 구하기
    var odd = [];
    // 짝수만 구하기
    var even = [];

    num_list.forEach((a) => {
        if (a % 2 == 0) {
            odd.push(a);
        } else {
            even.push(a);
        }
    })

    var added_odd = odd.join("");
    num_odd = Number(added_odd); // 홀수 요소를 넘버로 변환

    var added_even = even.join("");
    num_even = Number(added_even); // 짝수 요소를 넘버로 변환

    return num_odd + num_even;
}