let arr=[1,2,4,7,8,17,19,54,58]
let n=9
let x=17
let l=0
let r=arr.length-1
function binary(l,r){
//Base case
if(l>r){
    console.log(x,"is not present")
    return 
}
//recursive case
let mid=parseInt((l+r)/2)
if(x==arr[mid]) {
    console.log(x,"is present")
    return
}
else if(x>arr[mid]) binary(mid+1,r)
else binary(l,mid-1)
}

binary(l,r)