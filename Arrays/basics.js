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
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let temp;
// let arrLen = arr.length-1;

// for(let i=0; i<=arrLen/2;i++){
//     temp = arr[i];
//     arr[i] = arr[arrLen-i];
//     arr[arrLen-i] = temp;
// }
// console.log(arr);

//-------------------------------------------------------
//Linear Search//First Occurance//
// function lenearSearch(arr,e){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == e){
//             return i;
//         }
//     }
//     return -1;
// }

// let arr = [1,2,3,4,5,6,7,8,9];
// let e = 70;
// console.log(lenearSearch(arr,e));

//-------------------------------------------------------
//Linear Search//Multiple Occurances//
// function lenearSearch(arr,e){
//     let positions = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == e){
//             positions.push(i);
//         }
//     }
//     if(positions.length == 0){
//         return -1;
//     }
//     return positions;
// }

// let arr = [1,2,3,4,5,3,6,7,8,3,9];
// let e = 3;
// console.log(lenearSearch(arr,e));

//-------------------------------------------------------
//Binary Search//
// function binarySearch(arr,item){
//     let start = 0;
//     let end = arr.length-1;
    
//     while(start <= end){
//         let mid = Math.floor((start + end) / 2);
     
//         if(arr[mid] == item)
//             return mid;
        
//         if(item < arr[mid])
//             end = mid - 1;
//         else
//             start = mid + 1;
//     }
//     return -1
// }

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let item = 9;
// console.log(binarySearch(arr,item));  

//--------------------------------------------------------
//Merge two arrays//
let arr1 = [1,5,9,27,56,100,100,100,200,300,400,500,600];
let arr2 = [2,7,10,19,100,100,100,159,221,421];
let arr3 = [];
let a1 = 0;
let a2 = 0;
let a3 = 0;
let biggerArray;
if(arr1.length > arr2.length)
    biggerArray = 1;
else 
    biggerArray = 2;

while(a1 < arr1.length && a2 < arr2.length){
    if(arr1[a1] < arr2[a2]){
        arr3[a3] = arr1[a1];
        a1++;
    }else{
        arr3[a3] = arr2[a2];
        a2++;
    }
    a3++;
}

if(biggerArray == 1){
    while(a1 < arr1.length){
        arr3[a3] = arr1[a1];
        a1++;
        a3++;
    }
}else{
    while(a2 < arr2.length){
        arr3[a3] = arr2[a2];
        a2++;
        a3++;
    }
}

console.log(arr3);

