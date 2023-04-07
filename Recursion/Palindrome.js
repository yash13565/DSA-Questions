function isPalindrome(str){
    //Base Case
    if(str.length<=1) return true;
    //Recursive Case
    if(str[0]==str.slice(-1)) return isPalindrome(str.slice(1,-1))
    else return false

}
console.log(isPalindrome('refer'))