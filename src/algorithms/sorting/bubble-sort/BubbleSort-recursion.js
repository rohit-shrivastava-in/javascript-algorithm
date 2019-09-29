function bubbleSort(originalArray, pointer) {
    const arr = [ ...originalArray ]
    if(pointer === 0) return arr;
    for(let i = 0; i < pointer; i++) {
        if(arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            isSwapped = true;
        }
    }
    return bubbleSort(arr, pointer - 1)
}