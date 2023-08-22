function solution(num, k) {
    var strN = num.toString();
    if (strN.includes(k) == true) {
        return strN.search(k) + 1;
    } else {
        return -1;
    }
}