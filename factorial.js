function factorial(num){
    if(num<=1) return 1;
    // let result=1;
    // for(let i=2;i<=num;i++){
    //     result *=i;
    // }
    // return result
    return num * factorial(num-1); // Recursive call

}
console.log(factorial(3));

