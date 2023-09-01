function solution(binomial) {
    const [a, op, b] = binomial.split(" ");
    
    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);
    
    switch (op) {
        case '+':
            return numA + numB;
        case '-':
            return numA - numB;
        case '*':
            return numA * numB;

    }
    
    
}