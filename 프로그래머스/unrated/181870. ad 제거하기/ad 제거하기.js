function solution(strArr) {
    result =[];
    for(let i = 0; i < strArr.length; i++){
        if(!strArr[i].includes('ad')){
            result.push(strArr[i])
        }
    }
    return result;
}