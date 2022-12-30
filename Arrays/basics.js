//Insert an element in an array at given position//
let arr = [1,2,3,4,5,6,7,8];
let pos = 2;
let num = 100;

for(let i=arr.length-1; i>=pos; i--){
    arr[i+1] = arr[i];
    if(i == pos){
        arr[pos] = num; 
    }
}
console.log(arr);


