function solution(arr) {
    // 가장 작은 수 제거
    // 가장 작은 수 찾아서 제거
    //  빈 배열이면 -1 리턴
    let newArr = Math.min(...arr); // 가장 작은 값 찾기
    let newArr2 = arr.filter((item) => item !== newArr);

    if (!newArr2.length < 1) {
        return newArr2;
    } else {
        return [-1];
    }
}