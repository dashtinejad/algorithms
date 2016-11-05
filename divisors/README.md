# Divisors

Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself).

```js
function divisors(n) {
    let output = [];

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            output.push(i);
        }
    }

    return output;
}
```