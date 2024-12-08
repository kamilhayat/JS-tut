let arr = [15, 18, 12, 11, 19, 17];

let largest=arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i]
    }

}
console.log(largest);
