let arr1=[1,2,5,7]
let arr2=[9,12,24,25,36]
let n=arr1.length
let m=arr2.length

let arr3=[]
let i=0
let j=0
while(arr3.length<(n+m)){
    if(i==n){
        arr3.push(arr2[j])
        j++
    }else if(j==n){
        arr3.push(arr1[i])
        i++
    }else if(arr1[i]<arr2[j]){
        arr3.push(arr1[i])
        i++
    }else{
        arr3.push(arr2[j])
        j++
    }
}
console.log(arr3)