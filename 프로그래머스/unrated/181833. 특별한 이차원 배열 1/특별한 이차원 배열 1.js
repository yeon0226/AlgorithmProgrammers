function solution(n) {
  const arr = Array.from({ length: n }, () => Array(n).fill(0));
    
    for( let i = 0; i < n; i++){
        arr[i][i] = 1;
    }
    
    return arr;
}