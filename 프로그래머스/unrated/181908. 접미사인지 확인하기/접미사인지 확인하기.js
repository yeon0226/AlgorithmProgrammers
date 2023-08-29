function solution(my_string, is_suffix) {
    const suffixLength = is_suffix.length;
    const newStr = my_string.substring(my_string.length - suffixLength);
    
    if (newStr === is_suffix) {
        return 1;
    } else {
        return 0;
    }
}