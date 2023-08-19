// 어려워서 나중에 다시 보기 ㅠㅠㅠㅠㅠㅠ 수학 짜증나,,,

function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b); 
    // 최대 공약수-> a를 b로 나눈 나머지가 0이면 b가 최대 공약수 : a,b 가 나누어지지 않으면 b와 a를 b로 나눈 나머지를 다시 나눈다.
    const lcm = (a, b) => a * b / gcd(a, b);
    // 최소 공배수-> a 와 b를 곱한 뒤 최대 공약수로 나누면 최대 공배수가 나온다.
    return [gcd(num1, num2), lcm(num1, num2)];
}