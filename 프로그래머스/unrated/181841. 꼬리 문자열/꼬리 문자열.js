function solution(str_list, ex) {
  var str = "";
  for (var i = 0; i < str_list.length; i++) {
    if (str_list[i].includes(ex) == false) {
      str += str_list[i];
    }
  }
  return str;
}