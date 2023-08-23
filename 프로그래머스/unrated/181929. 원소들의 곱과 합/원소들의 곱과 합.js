function solution(num_list) {
    let result1 = num_list.reduce((acc, cur)=> acc * cur,1);
    let result2 = num_list.reduce((acc, cur) => acc + cur,0);
    let sum = Math.pow(result2, 2);
    
    if(result1 < sum) {
        return 1;
    } else{
        return 0;
    }
}