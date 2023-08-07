function solution(arr) {
    var result = [];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= 50) {
            if(arr[i] % 2 == 0) {
                result.push(arr[i] / 2);
            } else {
                result.push(arr[i]);
            }
        } else {
            if(arr[i] % 2 == 1) {
                result.push(arr[i] * 2);
            } else {
                result.push(arr[i]);
            }
        }
    }
    return result;
}

