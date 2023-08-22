function solution(myString, pat) {
    var arr = [...myString];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "A")  arr[i] = "B";
        else if (arr[i] == "B") arr[i] = "A";
    }

    return arr.join("").includes(pat) == true ? 1 : 0;
}