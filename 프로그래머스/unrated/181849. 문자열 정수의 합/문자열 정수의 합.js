function solution(num_str) {
    // 문자열을 배열로
   let number = num_str.split('').map(char => parseInt(char))
   // 숫자로 합
   let result = number.reduce((acc, cur) => acc + cur, 0);
    return result;
}
