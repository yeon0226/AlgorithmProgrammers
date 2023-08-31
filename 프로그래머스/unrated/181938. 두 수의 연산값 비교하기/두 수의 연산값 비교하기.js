function solution(a, b) {
    const str = parseInt(a.toString() + b.toString())
    const mul = 2 * a * b;
    
    return Math.max(str, mul)
}