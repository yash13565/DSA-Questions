//CountUniqueNumbers
//output-8
//[1,1,2,2,3,3,4,4,5,6,7,8,8]
function countUnique(arr){
if(arr.length>0){
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i]!==arr[j]){
            i++
            arr[i]=arr[j]  
        }  
    }
    return i+1;
}
else{
    throw new Error('Array is Empty')
}
}

const res=countUnique([1,1,2,2,3,3,4,4,5,6,7,8,8])
console.log(res)