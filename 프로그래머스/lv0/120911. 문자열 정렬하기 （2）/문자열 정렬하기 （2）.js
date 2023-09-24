function solution(my_string) {
   return [...my_string].map(a=>a.toLowerCase()).sort().join('')
}