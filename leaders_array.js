

function leaders(arr, n) {
    let ans = []
    let max= Number.MIN_SAFE_INTEGER
    // let n= arr.length
    for (let i =n-1; i > 0; i--) {
        //for brute force iterate through o to n
        // let flag = true

        // for (let j = i + 1; j < n; j++) {
        //     if (arr[i] < arr[j]) {
        //         flag = false
        //         break
        //     }
        // }
        // if (flag) {
        //     ans.push(arr[i])

        // }
        if(arr[i] > max) {
           ans.push(arr[i])
        }
        max=Math.max(max,arr[i])



    }
    return ans
}

let n = 6
let arr = [10, 22, 12, 3, 0, 6];

let ans = leaders(arr, n);


for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
}