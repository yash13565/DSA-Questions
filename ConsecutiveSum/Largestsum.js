//Largest sum of k=3

function findSum(arr,num){
if(num>arr){
    throw new Error('num is greater than array')
}else{
    let maxSum=0
    for(let i=0;i<arr.length-num+1;i++){
        let temp=0
        for(let j=0;j<num;j++){
            temp+=arr[i+j]
        }
        if(temp>maxSum){
            maxSum=temp
        }
    }
    return maxSum;
}
}

const rest=findSum([1,2,3,4,5,6,7,8],3)
console.log(rest)