function solution(array, height) {
    // height 보다 크면 result가 ++;
    result = [];

    for(i of array) {
        if(i > height) {
            result.push(i);
        }
    }
    return result.length;
}
