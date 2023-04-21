function solution(sides) {
   let arr = sides.sort();
    if(arr[arr.length-1] < arr[0] + arr[1]) return 1;
    else {
        return 2;
    }
}