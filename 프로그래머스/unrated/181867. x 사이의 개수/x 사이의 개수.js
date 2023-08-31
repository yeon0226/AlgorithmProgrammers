function solution(myString) {
    const splitStr = myString.split('x');
    const result = splitStr.map(str => str.length)
    
    return result;
}