function solution(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var e = arr[i];
    for (var j = 0; j < e; j++) {
      newArr.push(e);
    }
  }
  return newArr;
}