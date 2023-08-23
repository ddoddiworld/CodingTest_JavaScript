function solution(names) {
    let group = [];
    let cGroup = [];

    for (let i = 0; i < names.length; i++) {
        cGroup.push(names[i]);

        if (cGroup.length == 5 || i == names.length - 1) { // i === names.length - 1 : 5명이지 않을때도 허용하기 위해
            group.push(cGroup[0]);
            cGroup = []; // 찾고나서 다시 배열 초기화 시키기
        }
    }
    
    return group
}