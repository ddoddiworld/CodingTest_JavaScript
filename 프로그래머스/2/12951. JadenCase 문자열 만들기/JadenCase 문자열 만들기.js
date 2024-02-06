function solution(s) {
  var arr = s.split(" ");
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var sep = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    newArr.push(sep);
  }
    return newArr.join(" ");
}
