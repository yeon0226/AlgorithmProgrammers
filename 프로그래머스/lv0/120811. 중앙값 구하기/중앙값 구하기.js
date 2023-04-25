function solution(array) {
    // 오름차순 정렬
// 길이가 0일때 0반환
// 길이가 짝수이면 / 에서 -1;
// 길이가 홀수 이면 / 
     let sortedArray = array.sort((a, b) => a - b); // 배열을 오름차순으로 정렬
    let middleIndex = Math.floor(sortedArray.length / 2); // 중앙값의 인덱스 계산
    return sortedArray[middleIndex]; // 중앙값 반환
}

    
   



