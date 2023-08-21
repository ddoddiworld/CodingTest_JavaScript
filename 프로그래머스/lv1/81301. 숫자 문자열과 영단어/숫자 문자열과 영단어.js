function solution(s) {
    if (s.includes("zero") == true) {
        s = s.replaceAll("zero", 0);
    }
    if (s.includes("one") == true) {
        s = s.replaceAll("one", 1);
    }
    if (s.includes("two") == true) {
        s = s.replaceAll("two", 2);
    }
    if (s.includes("three") == true) {
        s = s.replaceAll("three", 3);
    }
    if (s.includes("four") == true) {
        s = s.replaceAll("four", 4);
    }
    if (s.includes("five") == true) {
        s = s.replaceAll("five", 5);
    }
    if (s.includes("six") == true) {
        s = s.replaceAll("six", 6);
    }
    if (s.includes("seven") == true) {
        s = s.replaceAll("seven", 7);
    }
    if (s.includes("eight") == true) {
        s = s.replaceAll("eight", 8);
    }
    if (s.includes("nine") == true) {
        s = s.replaceAll("nine", 9);
    }
    return Number(s);
}
