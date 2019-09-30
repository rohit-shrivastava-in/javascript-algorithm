function ReverseInPlace(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('')
}
console.log(ReverseInPlace("Rohit Shrivastava"))