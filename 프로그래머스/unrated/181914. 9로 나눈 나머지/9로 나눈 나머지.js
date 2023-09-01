function solution(number) {
  let sum = 0;
    for(const num of number){
        sum += parseInt(num , 10)
    }
    return sum % 9
}