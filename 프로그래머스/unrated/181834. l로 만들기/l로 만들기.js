function solution(myString) {
    return myString.split('').map(char => {
        return char < 'l' ? 'l' : char;
    }).join('');
}