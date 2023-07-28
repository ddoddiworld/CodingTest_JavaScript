function solution(n, k) {
    let yang = n * 12000 // 양꼬치
    let drink = k * 2000 // 음료수

    var service = Math.floor(n / 10) // 소수점 방지하면서 몫만 구하기 (나머지 필요 없기 때문에)

    var total_drink = drink - (service * 2000);

    if(total_drink < 0){
        total_drink = 0
    }

    var total = yang + total_drink
    return total
}
