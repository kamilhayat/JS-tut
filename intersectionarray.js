let arr = [1, 2, 3,3, 4, 6]

let arr2 = [1, 2,3 ,3, 5]
var n = arr2.length;
let found = false
let result =[];
var vis=Array(n).fill(0);
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr[i] === arr2[j] && vis[j]===0){
            result.push(arr[i]);
            vis[j] = 1;
            found=true;
            break;

        }
        if(arr[i]<arr2[j]){
            break;
        }
    }
 
}
if(!found){
    console.log('not pressent')
}
else
console.log(result)