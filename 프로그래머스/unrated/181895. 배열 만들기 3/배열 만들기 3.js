function solution(arr, intervals) {
  // 각 구간을 디스트럭쳐링하여 변수에 할당
  const [a1, b1] = intervals[0];
  const [a2, b2] = intervals[1];

  // 구간에 따른 서브 배열을 추출
  const subArr1 = arr.slice(a1, b1 + 1); // b1과 b2는 닫힌 구간이므로 포함되어야 함
  const subArr2 = arr.slice(a2, b2 + 1);

  // 두 서브 배열을 합친 후 반환
  return [...subArr1, ...subArr2];
}