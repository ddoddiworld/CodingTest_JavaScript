function solution(hp) {
    // 장군개미 5
    // 병정개미 3
    // 일개미 1
    var j = 5;
    var b = 3;
    var i = 1;

    var j_1 = Math.floor(hp / 5); // 몫;
    var j_2 = hp % 5 // 나머지

    if(isNaN(j_1)) {
        return 0;
    }
    
    var b_2 = j_2 % 3; // 나머지
    var b_1 = Math.floor(j_2 / 3); // 몫;

    if(isNaN(b_1)) {
        return 0;
    }
    
    // console.log(`장군개미는 ${j_1} 마리가 필요 / 병정개미는 ${b_1} 마리가 필요 / 일개미는 ${b_2} 마리가 필요`);
    var result = j_1 + b_1 + b_2;
   return result;
}

solution(999);