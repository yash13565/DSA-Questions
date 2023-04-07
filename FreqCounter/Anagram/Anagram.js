let str1='yashh'
let str2='syahh'

function isAngram(str1,str2){
if(str1.length!=str2.length) return false;
let counter={}
for(let letter of str1){
    counter[letter]=(counter[letter]||0)+1;
}
for(let items of str2){
    if(!counter[items]) return false
    counter[items]-=1
}
return true;
}
console.log(isAngram(str1,str2))