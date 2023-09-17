function solution(myString) {
  let result = "";
  for (let i = 0; i < myString.length; i++) {
    myString[i] < "l" ? (result += "l") : (result += myString[i]);
  }
    return result;
}