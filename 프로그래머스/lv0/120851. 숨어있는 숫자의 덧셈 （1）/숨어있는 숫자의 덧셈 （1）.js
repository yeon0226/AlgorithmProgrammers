function solution(my_string) {
   let result = 0;
    let arr = [...my_string];
    for(let i = 0; i < arr.length; i++){
        if( isNaN(arr[i]) === false){
            result += arr[i]
        }
    }return result
    .toString()
    .split("")
    .reduce((acc,cur) => acc+Number(cur),0 );

}
// 문자열을 배열로 바꾸고 
// 반복문으로 숫자인지 아닌지 판단
// 숫자이면 숫자들을 다시 문자열로 바꾸며 카운트