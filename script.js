let numbers=[4,8,2,11,6,7,10];
 



//Regular function --Find maximum number
function FindMax(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            
        }
    }
    return max;
};
console.log("Maximum number",FindMax(numbers))
 


//Arrow Function---- Sum of all elements
 
const  sumNumbers=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
 
console.log("Sum of all elements",sumNumbers(numbers));


//Anonymous Function -----count odd numbers

const odd=function(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            count++
        }
    }
    return count;
}
console.log("Count of odd numbers",odd(numbers));
