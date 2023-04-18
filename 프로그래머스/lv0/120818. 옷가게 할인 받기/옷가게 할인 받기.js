function solution(price) {
    if( price >= 500000){
        return Math.floor(price * 0.8);
    } else if( price >= 300000 && price < 500000){
        return Math.floor(price * 0.9);
    } else if( price >= 100000 && price < 300000) {
        return Math.floor(price * 0.95);
    } else{
        return price;
    }

}
// 10만원 이상 5% --> price >= 10 && price < 300000;
// 30만원 이상  10%  -> price >= 300000 && price < 500000;
// 50만원 이상 20% --> price >= 500000;
// 다 만족하지 못할경우 return price;
// Math.floor();
// 1%는 1/100 을 의미 합니다.
// 5%는 원래 금액에서 5/100 을 빼 준 금액이므로 원래 금액 - (원래금액 * 0.05) = 원래 금액 * 0.95 와 동일