function solution(a, b, c) {
  // 세 숫자의 합을 계산
  const sum = a + b + c;
  
  // 세 숫자의 제곱의 합을 계산
  const squareSum = a * a + b * b + c * c;
  
  // 세 숫자의 세제곱의 합을 계산
  const cubeSum = a * a * a + b * b * b + c * c * c;
  
  // 세 숫자가 모두 다른 경우
  if (a !== b && b !== c && a !== c) {
    return sum;
  }
  
  // 세 숫자가 모두 같은 경우
  if (a === b && b === c) {
    return sum * squareSum * cubeSum;
  }
  
  // 세 숫자 중 어느 두 숫자가 같은 경우
  return sum * squareSum;
}