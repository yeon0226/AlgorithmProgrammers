function solution(n) {
 let result=0;
    const str = n.toString()
 for(let i=0; i< str.length; i++ ){
     result = result + parseInt(str[i])
 }
    return result;
} 