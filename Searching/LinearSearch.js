let arr=[2,3,6,34,78,56,23,783,89]

let x=56
let ans=-1
for(let i=0;i<arr.length;i++){
    if(arr[i]==x){
        ans=i
    }
}
if(ans!=-1){
    console.log(`${x} is present at index ${ans}`)
}else{
    console.log(`${x} is not present `)
}