function solution(myString) {
   const arr = myString.split('x');
    
    // 빈문자열 제거
    const newArr = arr.filter(str => str !== '');
    const sortArr = newArr.sort();
    
    return sortArr;
}