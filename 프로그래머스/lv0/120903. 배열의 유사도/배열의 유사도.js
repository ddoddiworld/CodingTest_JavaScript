function solution(s1, s2) {
    // s1 과 s2의 요소들을 각각 비교하여 동일한 요소들을 return
    var result = s1.filter(it => s2.includes(it));
    return result.length;
}