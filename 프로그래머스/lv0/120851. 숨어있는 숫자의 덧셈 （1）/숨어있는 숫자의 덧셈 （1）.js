function solution(my_string) {
    var regex = /[^0-9]/g;
    var result = (my_string.replace(regex, ""));
    var newArr = (result + '').split('');
    var total = 0;

    newArr.forEach((a) => {
        total += Number(a);
    })

    return total;
}