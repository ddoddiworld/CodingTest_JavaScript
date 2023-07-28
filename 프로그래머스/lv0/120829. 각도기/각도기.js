function solution(angle) {
    if(angle < 90) {
        return 1;
    } else if (angle == 90) {
        return 2;
    } else if (angle == 180) {
        return 4;
    } else {
        return 3;
    }

    return [70, 91, 180].filter(x => angle>=x).length;
}