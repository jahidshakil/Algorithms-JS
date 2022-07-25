const bubble = (array) => {
    for (let i = 0; i < array.length - 1; i++){
        for (j = 0; j < array.length - 1 - i; j++){
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    
    return array
}

console.log(bubble([1,2,3,25,33,22,876,123,34,9]))