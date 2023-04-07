let arr=[1,2,4,7,8,17,19,54,58,62]
let x=17
let l=0
let r=arr.length-1
let ans=-1
while(l<=r){
    let mid=parseInt((l+r)/2)
    if(x==arr[mid]){
        ans=mid
        break;
    }
    else if(x>arr[mid]){
        l=mid+1
    }else{
        r=mid-1
    }
    
}
if(ans!=-1){
    console.log(`${x} is present at index ${ans}`)
}else{
    console.log(`${x} is not present `)
}