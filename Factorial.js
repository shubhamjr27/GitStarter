const factorial = (n) => {
    let fact = 1;
    for(let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

const result = factorial(5);
console.log(result);