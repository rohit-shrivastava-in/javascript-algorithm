function bubbleSort(originalArray){
    const arr = [ ...originalArray ]
    let len = arr.length;
    let isSwapped;
    do {
        isSwapped = false;
        for(let i = 0; i < len; i++) {
            if(arr[i] > arr[i + 1]){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                isSwapped = true;
            }
        }
        len--;
    } while (isSwapped)
    return arr
}