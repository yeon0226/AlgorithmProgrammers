function solution(a, b) {
    const strA = a.toString();
    const strB = b.toString();
    
    const sumA = strA + strB;
    const sumB = strB + strA;
    
    if(sumA > sumB){
        return Number(sumA)
    } else {
        return Number(sumB)
    }
}
