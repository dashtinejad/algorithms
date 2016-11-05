# Eureka



The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title.
What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: `89 = 8^1 + 9^2`

The next number in having this property is 135.

See this property again: `135 = 1^1 + 3^2 + 5^3`

```js
function eureka(n) {
    var arr = (n + "").split("");

    let sum = 0;
    arr.forEach((digit, i) => {
        sum += Math.pow(digit, (i + 1));
    });

    return sum == n;
}
```

```js
function eureka(n) {
    let sum = n
        .toString() // make it string
        .split('') // make array by each digit
        .reduce((sum, digit, index) => sum + digit ** (index + 1), 0);

    return sum == n;
}
```