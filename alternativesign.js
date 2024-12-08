

function alternative(arr){
    const positives = arr.filter(x => x > 0);
    const negatives = arr.filter(x => x < 0);
    const result = [];
    let i=0, j=0
    while(i<positives.length && i< negatives.length){
        result.push(positives[i])
        result.push(negatives[i])
        i++;
        j++
    }
    while(i<positives.length){
        result.push(positives[i])
        i++
    }
    while(j<negatives.length){
        result.push(negatives[i])
        j++
    }

return result

}

const arr = [3, -2, 5, -1, -6, 7, 8];
let ans = alternative(arr)
for(let i=0; i<ans.length; i++){
    console.log(ans);
}