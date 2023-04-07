//output[-4,4]
function sumZero(arr){
    for(let number of arr){
        for(let j=1;j<arr.length;j++){
            if(number+arr[j]===0){
                return [number,arr[j]]
            }
        }
    }
}
const result=sumZero([-5,-4,-3,-2,0,2,4,6,8])
console.log(result)