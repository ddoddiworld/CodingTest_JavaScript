function solution(numbers) {
    // numbers의 각 원소를 2배씩 해서 새로운 배열을 return
    var newArr = [];

    for(i of numbers) {
        var result = i * 2;
        newArr.push(result);
    }

    return newArr
}