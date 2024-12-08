let arr = [5, 9, 7, 6, 4, 12];
let n = arr.length;
let target = 1;
let found = false;
for(let i=0; i<n;i++){
    if(arr[i]== target){
        console.log(i)
        found= true;
        break;
    }
    
    
}
if(!found)
console.log('not found')