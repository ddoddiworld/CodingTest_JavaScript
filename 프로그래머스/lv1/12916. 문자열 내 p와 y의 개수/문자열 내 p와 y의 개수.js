function solution(s){
    // p 와 y 의 개수를 비교
    // 같으면 True, 다르면 False 리턴
    var lower = s.toLowerCase();
    var arr = [...lower];

    // p 갯수 찾기
    var num_p = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == 'p') {
            num_p++;
        }
    }

    // y 갯수 찾기
    var num_y = 0;
    for(var z = 0; z < arr.length; z++) {
        if(arr[z] == 'y') {
            num_y++;
        }
    }

    if (num_p == num_y) {
        return true;
    } else {
        return false;
    }
}