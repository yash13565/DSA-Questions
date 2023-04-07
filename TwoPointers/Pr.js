// print last char

// let str='hi i am yash,'
// let lastChar=str.split(' ')
// const res=lastChar[3].slice(0,4)
// console.log(res)

//Print first vowel in a string

let str='hii  my name is ashar'
let convertedWord=str.split(' ')
let emptySpace=convertedWord.filter(x=>x!='');
console.log(emptySpace);
let ans=convertedWord.find((x)=>x.startsWith('i'||'a'||'e'||'o'||'u'))
console.log(ans)