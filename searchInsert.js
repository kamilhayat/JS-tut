var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        else {
            nums.push(target);
        }
    }
};

function main() {
    let digits = [3,5]
    let target = 4;
    const ans = searchInsert(digits, target)
    console.log(ans)


}

main()