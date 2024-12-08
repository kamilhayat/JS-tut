// let arr = [0, 15, 18, 0, 12, 11, 0, 19, 17];
// let n = arr.length;

// function swap(arr ,i,nonzero){
//     let temp = arr[nonzero];
//     arr[nonzero] = arr[i];
//     arr[i] = temp;
// }
// function moveZero(arr) {
//     let nonzero = 0;
//     for (let i = 0; i < n; i++) {

//         if (arr[i] != 0) {
//             swap(arr,i,nonzero);
//             nonzero++;
//         }
//     }

// }
// moveZero(arr);
// for (let i = 0; i < n; i++) {
//     console.log(arr[i]);
// }

//brute force approach
// let arr = [0, 15, 18, 0, 12, 11, 0, 19, 17];
// let n = arr.length;

// let tempt=[];
// for(let i=0; i<n;i++){
//     if(arr[i]!=0){
//         tempt.push(arr[i]);
//     }
// }

// for(let i=0; i<tempt.length;i++){
//     arr[i]=tempt[i];
// }

// let nonNegative= tempt.length;
// for(let i=nonNegative; i<n;i++){
//     arr[i]=0;
// }


// for (let i = 0; i < n; i++) {
//         console.log(arr[i]);
//     }


// optimal approach using two pointer
let arr = [0, 15, 18, 0, 12, 11, 0, 19, 17];
let n = arr.length;


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let j = -1;
for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
        j = i;
        break;
    }
}
for (var i = j + 1; i < n; i++) {
    if (arr[i] != 0) {
        swap(arr, i, j);
        j++;
    }
}

for (var i = 0; i < n; i++) {
    console.log(arr[i]);
}
