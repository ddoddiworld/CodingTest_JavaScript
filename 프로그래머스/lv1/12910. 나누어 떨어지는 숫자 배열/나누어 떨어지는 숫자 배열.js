function solution(arr, divisor) {
    var result = (arr.filter((v,idx,arr)=> {
        return v % divisor == 0 
    }).sort((a,b)=>{
        return a - b
    }));
    if(result.length == 0) {
        return [-1];
    } else {
        return result;
    }
}