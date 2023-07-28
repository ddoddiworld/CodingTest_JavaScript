function solution(dot) {
    if (dot[0] > 0 && dot[1] > 0) {
        // x, y 모두 양수
        return 1;
    }

    if (dot[0] < 0 && dot[1] > 0) {
        // x는 음수, y는 양수
        return 2;
    }

    if (dot[0] < 0 && dot[1] < 0) {
        // x, y 모두 음수
        return 3;
    }

    if (dot[0] > 0 && dot[1] < 0) {
        // x는 양수, y는 음수
        return 4;
    }
}