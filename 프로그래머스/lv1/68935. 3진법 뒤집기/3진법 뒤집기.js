function solution(n) {
    var three = [...n.toString(3)].reverse(); // 10 -> 3진법
    var reThree = three.join("");
    return parseInt(reThree, 3);
}