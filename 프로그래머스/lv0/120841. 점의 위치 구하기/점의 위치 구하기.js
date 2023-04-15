function solution(dot) {
 if(dot[0] >= 0 && dot[1] >= 0) return 1;
 if(dot[0] < 0 && dot[1] < 0) return 3;
 if(dot[0] >= 0 && dot[1] < 0) return 4;
 if(dot[0] < 0 && dot[1] >= 0)return 2;
       
}

//둘다 양수-> 1
//y만 양수면 -> 2
// 둘다 음수 -> 3
// x만 양수 -> 4
