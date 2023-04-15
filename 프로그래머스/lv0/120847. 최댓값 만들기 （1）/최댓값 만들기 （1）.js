function solution(numbers) {
   let newArray = numbers.sort(function (a, b){
       if( a > b) return 1;
       if( a === b) return 0;
       if( a < b) return -1;
   })
   return newArray[newArray.length - 1] * 
       newArray[newArray.length - 2];
}