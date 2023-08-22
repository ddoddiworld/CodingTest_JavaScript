function solution(myString) {
    var low = myString.toLowerCase();
    var result = low.replaceAll("a", "A");
    return result;
}