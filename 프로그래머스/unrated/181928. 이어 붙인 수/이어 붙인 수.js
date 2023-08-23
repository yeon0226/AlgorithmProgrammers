function solution(num_list) {
    
    let total;
    let result1=[];
    let result2=[];
    
    for(let i=0; i < num_list.length; i++){
        if(num_list[i] % 2 !== 0){
      result1.push(num_list[i])
        } else{
      result2.push(num_list[i]);
        }
    }
    // 숫자로 변환
    let arr1 = parseInt(result1.join(''));
    let arr2 = parseInt(result2.join(''));
    
    return arr1 + arr2;
}
