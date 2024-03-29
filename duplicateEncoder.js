/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  */

function duplicateEncode(word){
    //toLowerCase
    //split -> map -> indexOf === lastIndexOf ? '(' : ')'
    //join
    return str.toLowerCase()
            .split('')
            .map((l,i,a) => a.indexOf(l) === a.lastIndexOf(l) ? '(' : ')')
            .join('')

}
//optimize with hashmap/ caching


conosole.log(encodeDupes('din'),'(((')
conosole.log(encodeDupes('recede'),'()()()')
