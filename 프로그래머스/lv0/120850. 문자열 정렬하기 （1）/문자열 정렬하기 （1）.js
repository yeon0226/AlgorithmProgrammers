function solution(my_string) {
    let result = [];
    for(let i = 0; i < my_string.length; i++){
        let num = parseInt(my_string[i]);
        if(!isNaN(num)){
            result.push(num);
        }
        }
    return result.sort(function (a, b) {
        return a - b;
    })
    
}