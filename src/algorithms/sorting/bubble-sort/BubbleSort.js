console.log("Bubble sort")
const arr = [10, 45, 23, 58, 54, 26, 70, 88, 95, 65, 45, 28, 37, 91, 97, 100];
function bubbleSort(originalArray) {
    const arr = [ ...originalArray ]
    let len = arr.length;
    let isSwapped = false;
    for(let i = 0; i < len; i++) {
        if(arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            isSwapped = true;
        }
    }
    if(isSwapped) bubbleSort(arr)
    return arr
}
console.log(bubbleSort(arr))