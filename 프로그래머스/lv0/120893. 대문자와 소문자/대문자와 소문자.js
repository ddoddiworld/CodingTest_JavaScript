function solution(my_string) {
  var result = "";
  for (var i = 0; i < my_string.length; i++) {
      my_string[i] == my_string[i].toUpperCase() ? 
          result += my_string[i].toLowerCase() : result += my_string[i].toUpperCase();
  }
  return result;
}