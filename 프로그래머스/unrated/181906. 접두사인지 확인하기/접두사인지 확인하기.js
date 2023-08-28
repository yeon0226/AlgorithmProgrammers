function solution(my_string, is_prefix) {
    // my_string보다 is_prefix의 길이가 더 크면 접두사가 될 수 없음
    if(is_prefix.length > my_string.length){
        return 0;
    }    
    //my_string의 첫번째 인덱스부타 is_prefix의 길이만큼 문자가 일치?
    if(my_string.substring(0, is_prefix.length) === is_prefix){
        return 1;
    } else {
        return 0;
    }
}