function fibo(n) {
    const memo = new Map();
    if(n<=0){
        console.error("O numero tem de ser maior que zero");
        
    }
    function fib(n) {
        if (n <= 1) return n;
        if (memo.has(n)) return memo.get(n);
        const result = fib(n - 1) + fib(n - 2);
        memo.set(n, result);
        return result;
    }
    return fib(n)
}


console.time("ola");
console.log(fibo(0)); // 55 (avoids redundant calculations)  
console.timeEnd("ola");
console.time("ola2");
console.log(fibo(1200)); // 55 (avoids redundant calculations)  
console.timeEnd("ola2");
