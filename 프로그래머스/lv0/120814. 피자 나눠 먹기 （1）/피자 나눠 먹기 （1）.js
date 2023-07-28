function solution(n) {
    var num_pizza = Math.floor(n / 7); // 몫만 구하기 위해

    if(n % 7 != 0) {
        return num_pizza + 1
    } else {
        return num_pizza
    }
}