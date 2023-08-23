function solution(numbers) {
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j]; // 순서대로 돌아가면서 더해 줌
            if (!answer.includes(sum)) answer.push(sum);
        }
    }

    answer.sort((a, b) => a - b); // 실행문 1줄이면 { } 생략 가능
    return answer
}