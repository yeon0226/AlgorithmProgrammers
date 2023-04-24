function solution(money) {
    let result = [];
    let ice = 5500;
    if(money < ice ) return [0, money]; 
    
    if(money >= ice ){
        result[0] = Math.floor(money/ice);
        result[1] = money % ice;
    }
    return result;
        
 }
  


// 새로운 배열 생성
// 0번째 인덱스에 Math.floor()함수를 이용해 나누기로 몫을 넣고
// 1번째 인덱스에 %를 이용해 남은 금액을 넣어줌