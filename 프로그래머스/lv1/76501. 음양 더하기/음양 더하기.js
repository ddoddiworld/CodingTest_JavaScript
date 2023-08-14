function solution(absolutes, signs) {
    var umsu = 0;   // 음수 총 합
    var yangsu = 0; // 양수 총 합
    
    for(var i = 0; i < absolutes.length; i++) {
        if(signs[i] == false) {
            umsu += absolutes[i] * -1 // 음수 값으로 변경
        } else {
            yangsu += absolutes[i];
        }
    }
    return umsu + yangsu;
}