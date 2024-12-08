// brute force approach
let arr = [1, 2, 3, 4, 6]

let arr2 = [2, 3, 5]

let temp = new Set();

for (let i = 0; i < arr.length; i++) {

    temp.add(arr[i]);



}
for (let j = 0; j < arr2.length; j++) {
    temp.add(arr2[j]);
}

let result = Array.from(temp).sort((a, b) => a - b);
console.log(result)

// optimal using two ponter


