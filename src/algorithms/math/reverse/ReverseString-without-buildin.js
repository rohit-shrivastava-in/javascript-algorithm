function Reverse(str){
    var newStr = ''
    for(let i = str.length - 1; i >= 0; i--){
        newStr = newStr.concat(str[i])
    }
    return newStr
}
console.log(Reverse("Rohit Shrivastava"))