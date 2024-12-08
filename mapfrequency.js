


function getSingleElement(arr) {
    const n = arr.length;
    const hashmap = new Map();
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }

    for (const [num, count] of hashmap) {
        if (count === 1) {
            return num;
        }
    }

    return -1;
}

function main() {
    const arr = [4, 1, 2, 1, 2];
    const ans = getSingleElement(arr);
    console.log("The single element is:", ans);
}

main();



