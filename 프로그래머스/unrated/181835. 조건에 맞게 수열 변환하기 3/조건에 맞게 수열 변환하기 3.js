function solution(arr, k) {
    if(k % 2 !== 0){
        return arr.map(value => value * k);
    } else{
        return arr.map(value => value + k);
    }
}