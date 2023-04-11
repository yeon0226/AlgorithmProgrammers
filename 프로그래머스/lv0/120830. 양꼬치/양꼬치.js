function solution(n, k) {
    let sheep = 12000;
    let drink = 2000;
    let service = Math.floor(n/10)
    
    if(n >= 10){
        return (sheep * n ) +(k * drink) -  (service * drink);
    } else if( n < 10){
        return (sheep * n) + (drink * k)
    }
}
   
