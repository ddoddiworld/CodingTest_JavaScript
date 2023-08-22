function solution(arr, k) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (k % 2 == 0) result.push(arr[i] + k);
        else result.push(arr[i] * k);
    }
    return result;
}