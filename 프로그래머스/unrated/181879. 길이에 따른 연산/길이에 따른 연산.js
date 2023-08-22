function solution(num_list) {
    let sum = 0;
    let result = 1;
    if(num_list.length >= 11){
        for(let i = 0; i < num_list.length; i++){
            sum += num_list[i];
        } return sum;
    } else{
        for(let i = 0; i < num_list.length; i++){
            result *= num_list[i];
        }return result;
    }
}