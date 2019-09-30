function Reverse(str){
    const arr = []
    for(let i = str.length; i >= 0; i--){
        arr.push(str[i])
    }
    return arr.join('')
}
console.log(Reverse("Rohit Shrivastava"))