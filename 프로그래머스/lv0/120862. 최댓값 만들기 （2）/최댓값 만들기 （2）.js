function solution(numbers) {
     // 배열을 오름차순으로 정렬합니다.
    numbers.sort((a, b) => a - b);

    const n = numbers.length;

    // 음수와 양수의 곱 중 최댓값을 구합니다.
    const negativeMax = numbers[0] * numbers[1];
    const positiveMax = numbers[n - 2] * numbers[n - 1];

    // 음수와 양수의 곱 중 더 큰 값을 반환합니다.
    return Math.max(negativeMax, positiveMax);
}