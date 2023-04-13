function solution(array, height) {
  let count = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > height){
            count++;
        }
    }
    return count;
}

// 배열을 돌면서 
// 머쓱이 키를 기준으로 해서 
// 머쓱이보다 크다? --> 기준이 머쓱이키보다 큰애로 바뀜 --> 반복
// 키가 큰 사람의 수를 카운트