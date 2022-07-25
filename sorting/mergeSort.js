// merge two sorted array 

const merge = (left, right) => {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result
}
// recursive method to break the array

const mergeSort = (array) => {
    if(array.length<=1)return array
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0,mid);
    const right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
};
console.log(mergeSort([1, 2, 3, 25, 33, 22, 876, 123, 34, 9]));