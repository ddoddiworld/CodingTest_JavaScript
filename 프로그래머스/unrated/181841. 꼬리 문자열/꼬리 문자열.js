function solution(str_list, ex) {
  return (str_list.filter((item) => !item.includes(ex)).join(""));
}