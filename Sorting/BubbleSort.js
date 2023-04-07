let arr=[17,8,26,54,24,32,12]
function Bubblesort(arr){
    for(let i=0;i<arr.length;i++){
        let swap=false;
        for(var j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                swap=true
               var temp=arr[j]
               arr[j]=arr[j+1]
               arr[j+1]=temp
            }
        }
        if(swap==false){
            break;
        }
    }
    console.log(arr);
}


Bubblesort(arr);