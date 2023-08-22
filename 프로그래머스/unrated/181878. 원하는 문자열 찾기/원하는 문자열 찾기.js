function solution(myString, pat) {
    var str = myString.toLowerCase();
    var str2 = pat.toLowerCase();

    return str.includes(str2) ? 1 : 0
}