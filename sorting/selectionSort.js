function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
            [inputArr[i], inputArr[min]] = [inputArr[min], inputArr[i]] 
        }
    }
    return inputArr;
}

console.log(selectionSort([1,2,3,25,33,22,876,123,34,9]))