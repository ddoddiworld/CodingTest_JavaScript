function solution(num_list) {
    let last = num_list.at(-1);
    let last2 = num_list.at(-2);

    if (last > last2) {
        num_list.push(last - last2);
    } else {
        num_list.push(last * 2);
    }

   return num_list;
}