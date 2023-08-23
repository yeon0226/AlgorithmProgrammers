function solution(myString, pat) {
    // A와 B 서로 바꾸기
    let newStr = myString.split('').map(char => {
        if (char === 'A') return 'B';
        if (char === 'B') return 'A';
        return char;
    }).join('');

    //pat이 포함되어 있는지 확인
    if (newStr.includes(pat)) {
        return 1;
    } else {
        return 0;
    }
}


