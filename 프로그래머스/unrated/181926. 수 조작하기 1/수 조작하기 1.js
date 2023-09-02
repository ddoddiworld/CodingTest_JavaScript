function solution(n, control) {
  let result = n;
  for (let i = 0; i < control.length; i++) {
    if (control[i] == "w") {
      result += 1;
    }

    if (control[i] == "s") {
      result -= 1;
    }

    if (control[i] == "d") {
      result += 10;
    }

    if (control[i] == "a") {
      result -= 10;
    }
  }
  return result;
}