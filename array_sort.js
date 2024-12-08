let arr = [5, 9, 7, 6, 4, 12];
let n= arr.length;

// arr.sort((a,b)=> a-b)

for (let i = 0; i < n - 1; i++) {
    let minIndex = i;  
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) { 
            minIndex = j;
        }
    }
  
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
}

console.log(arr); 