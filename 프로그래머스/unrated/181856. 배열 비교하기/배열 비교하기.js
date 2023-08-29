function solution(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return 1;
    }
    if (arr1.length < arr2.length) {
        return -1;
    }
    
    // 길이가 같을때
    let sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = arr2.reduce((acc, cur) => acc + cur, 0);
    
    if(sum1 > sum2) return 1;
    if(sum1 < sum2) return -1;
    if(sum1 === sum2) return 0;
}
