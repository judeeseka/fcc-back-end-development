function isPrime(n) {
    if (n === 1) return false;
    if (n === 2) return true;

    for (let i = 2; i <= n - 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isPrime
}