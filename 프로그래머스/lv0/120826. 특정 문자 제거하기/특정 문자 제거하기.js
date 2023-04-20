function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}
// function solution(my_string, letter) {
//     let result="";
//    for(let i = 0; i < my_string.length; i++){
//        if(my_string[i] !== letter){
//            result = result + my_string[i];
//        }
//    }
//     return result;
// }

// 문자열에 letter와 같은 문자열이 잇는지 확인
// 있으면 제거한 문자열 return 