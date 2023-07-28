function solution(num_list) {
    // num_list 라는 배열 안의 요소들 하나하나 가져와서 %2 == 0 -> 짝  아니면 홀
    // return [짝수 갯수, 홀수 갯수];

    var odd = []; // 홀수
    var even = []; // 짝수

    for(i of num_list) {
        i % 2 == 0 ? even.push(i) : odd.push(i);
    }

    // console.log(`홀수는 ${odd}개 / 짝수는 ${even}개 입니다.`);

    var odd_length = odd.length;
    var even_length = even.length;

    return [even_length, odd_length]; // [짝수 갯수, 홀수 갯수]
}
