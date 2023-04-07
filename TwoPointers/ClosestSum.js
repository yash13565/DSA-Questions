// Given two sorted arrays and a number x, find the pair whose sum is closest to x and the pair has an element from each array. 
// a).
// Input:  ar1[] = {1, 4, 5, 7};
//         ar2[] = {10, 20, 30, 40};
//         x = 32      
// Output:  1 and 30

// b).
// Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54

// Output: 22 and 30

let arr1 = [1, 4, 5, 7];
let arr2 = [10, 20, 30, 40];
let x = 32

function closestSum(arr1,arr2,x){
    let i=0;
    let j=arr2.length-1;
    while(i<=j){
        if(arr1[i]+arr2[j]<=x)

        { 
            return [arr1[i],arr2[j]]
        }
        if(arr1[i]+arr2[j]<x){

            i++ ;
            j++;
        }
       if(arr1[i]+arr2[j]>x){
         i--;
         j--
        }
    }
}
console.log(closestSum(arr1,arr2,x))
