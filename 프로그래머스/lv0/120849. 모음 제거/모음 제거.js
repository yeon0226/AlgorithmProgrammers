function solution(my_string) {
   const str = 'aeiou'
    let newString = my_string.split('').filter((el)=>(!str.includes(el))).join('')
    
    return newString
    
}

// 문자열안에 a, e, i, o, u 가 있는지 확인
// 있으면 제거
// 없으면 그대로 리턴
// 공백 유지
