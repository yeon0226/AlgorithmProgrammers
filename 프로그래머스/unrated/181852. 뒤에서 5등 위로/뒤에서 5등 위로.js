function solution(num_list) {
    let arr = num_list.sort((a,b) => a - b);
    return arr.slice(5);
    
}
// 오름차순으로 정렬 : arr.sort(a,b)=> a -b;
// 앞에 다섯자리 제외하고 return