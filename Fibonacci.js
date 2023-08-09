const fibonacci = (n) => {
    let a = 0;
    let b = 1;
    for(let i = 1; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
}
let n = 1;
while(n <= 5) {
    const result = fibonacci(n);
    console.log(result);
    n++;
}
