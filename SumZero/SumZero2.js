//output[-4,4] timeComplexity=o(n)
//Two pointers method.
function sumZero(arr){
    let left=0;
    let right=arr.length-1
    while(left<right){
        sum=arr[left]+arr[right]
        if(sum===0){
            return [arr[left],arr[right]]
        }else if(sum<0){
            left++
        }else{
            right--
        }
    }
}
const result=sumZero([-5,-4,-3,-2,0,2,4,6,8])
console.log(result)