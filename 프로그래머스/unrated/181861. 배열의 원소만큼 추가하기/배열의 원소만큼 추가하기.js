function solution(arr) {
    let result =[];
    for(let a of arr){
        for(let i = 0; i < a; i++){
            result.push(a)
        }
    }
    return result;
}