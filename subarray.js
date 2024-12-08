

function subArray(arr, k) {
    let left = 0;
    let right = 0;
    let sum = arr[0];
    let n = arr.length;
    let maxl = 0;
    while (right < n) {
        while (left <= right && sum > k) {
            sum -= arr[left];
            left++;
        }
        if (sum == k) {
            maxl = Math.max(maxl, right - left + 1);
        }
        right++;
        if (right < n) {
            sum += arr[right];
        }

    }
    return maxl;

}

let arr = [2, 3, 5, 1, 9];
let k = 10;
let len = subArray(arr, k);
console.log("The length of the longest subarray is:", len);