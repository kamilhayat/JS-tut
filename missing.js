

function misingNumber(arr, N) {
    for (let i = 1; i < N; i++) {
        let flag = 0;
        for (let j = 0; j < N - 1; j++) {
            if (arr[j] === i) {
                flag = 1;
                break;
            }
        }
        if (flag === 0) {
            return i;
        }
    }


}

function main() {
    const N = 5;
    let arr = [1, 2, 4, 5]
    const ans = misingNumber(arr, N)
    console.log(ans)

}

main()