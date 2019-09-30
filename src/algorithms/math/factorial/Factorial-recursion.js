function Factorial(num){
    if(num === 1)
        return num;
    return num * Factorial(num - 1)
}
console.log(Factorial(4))