// The function should return true if every value in the first array has its corresponding value squared in the second array
// The frequency of the values must be the same.

const arr1=[1,2,3,4,7]
const arr2=[1,4,9,16,49]
function sumSquared(arr1,arr2){
    if(arr1.length!==arr2.length) return false
    let obj={}
    for(let num of arr1){
        obj[num*num]=(obj[num*num]||0)+1;
    }
    for(let char of arr2){
        if(!obj[char]) return false
        obj[char]-=1
        }
    
    return true
}

const res=sumSquared(arr1,arr2)
console.log(res)