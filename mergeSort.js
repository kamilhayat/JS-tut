

function merge(arr, low, mid, high) {
    let temp = []
    let left = low
    let right = mid + 1
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left])
            left++
        } else {
            temp.push(arr[right])
            right++
        }
    }
    while (left <= mid) {

        temp.push(arr[left])
        left++
    }
    while (right <= high) {
        temp.push(arr[right])
        right++
    }
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

function mergeSort(arr, low, high) {
    if (low >= high) return

    const mid = Math.floor((low + high) / 2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid + 1, high)
    merge(arr, low, mid, high)

}
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", array);
mergeSort(array, 0, array.length - 1)
console.log("Sorted Array:", array);
