function solution(my_string) {
    const regExp = /[0-9]/g;
    const arr= my_string.match(regExp).map(el=>Number(el))
    return arr.sort((a,b)=>a-b)
}