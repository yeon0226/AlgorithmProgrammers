function solution(slice, n) {
    let answer = 0;
    answer = (Math.floor((n - 1) / slice) + 1);
    return answer;
}