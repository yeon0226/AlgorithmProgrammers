function solution(numbers) {
    let result = numbers.reduce((a,b) => a+b,0);
    return result / numbers.length
}


//원소 모두 더하고( reduce() 사용, 초깃값 0)
// 나눠서 평균값 구하기