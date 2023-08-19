function solution(s) {
    // 각 단어의 짝수번째만 대글자로 변경
    var arr = s.split(" "); //[ 'try', 'hello', 'world' ]
    var result = arr
        .map((v, idx, arr) => {
            return [...v]
                .map((v1, idx1, arr1) => {
                    if (idx1 % 2 == 0) return v1.toUpperCase();
                    else return v1.toLowerCase();
                })
                .join("");
        })
        .join(" ");

    return result;
}
