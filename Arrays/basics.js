//Insert an element in an array at given position//
// let arr = [1,2,3,4,5,6,7,8];
// let pos = 2;
// let num = 100;

// for(let i=arr.length-1; i>=pos; i--){
//     arr[i+1] = arr[i];
//     if(i == pos){
//         arr[pos] = num; 
//     }
// }
// console.log(arr);

//-----------------------------------------------------
//Delete an element from an array from given position//
// let arr = [1,2,3,4,5,6,7,8];
// let pos = 6;

// for(let i=pos; i<arr.length-1; i++){
//     arr[i] = arr[i+1];
// }
// arr.length = arr.length-1;
// console.log(arr);

//------------------------------------------------------
//Reverse an array//
let arr = [1,2,3,4,5,6,7,8,9,10];
let temp;
let arrLen = arr.length-1;

for(let i=0; i<=arrLen/2;i++){
    temp = arr[i];
    arr[i] = arr[arrLen-i];
    arr[arrLen-i] = temp;
}
console.log(arr);