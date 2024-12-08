
// function linearSearch(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == num) {
//             return true;
//         }

//     }
//     return false;
// }

// function longestConsequativeSequence(arr) {
//     let longestSequence = 1;
//     for (let i = 0; i < arr.length; i++) {
//         let x = arr[i];
//         let cnt = 1;

//         while (linearSearch(arr, x + 1) === true) {
//             x += 1;
//             cnt += 1
//         }
//         longestSequence = Math.max(longestSequence, cnt);
//     }
//     return longestSequence;
// }

// let arr = [100, 200, 1, 2, 3, 4];
// let ans = longestConsequativeSequence(arr);
// console.log("The longest consecutive sequence is", ans);

function longestSequence(arr) {
    let n = arr.length;
    let longest =1;
    let st = new Set();
    for (let i = 0; i < n; i++) {
        st.add(arr[i]);

    }

    for(let item of st){
        if(!st.has(item-1)){
            let cnt =1;
            let x= item
            while(st.has(x +1)){
                x += 1;
                cnt += 1;
            }
            longest= Math.max(longest,cnt)
        }
    }
    return longest
}

let arr = [100, 200, 1, 2, 3, 4];
let ans = longestSequence(arr);
console.log("The longest consecutive sequence is", ans);