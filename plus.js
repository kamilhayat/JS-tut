var plusOne = function (digits) {
    let n = digits.length;
    
    for (let i = n-1; i >=0; i--) {
        {
            if(digits[i]!=9){
                digits[i] += 1;
                return digits;
            }
           else
                digits[i]=0;
            
        }
    }
    digits.unshift(1);
    return digits;


}

function main() {
    let digits = [9,9]
    const ans = plusOne(digits)
    console.log(ans)

}

main()