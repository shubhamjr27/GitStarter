const factorial = (n) => {
    let fact = 1;
    for(let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
let n = 4;
const result = factorial(n);
console.log(result);