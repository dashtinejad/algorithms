# Digital Root

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

```js
digital_root(16)
// 1 + 6
// 7

digital_root(942)
// 9 + 4 + 2
// 15 ...
// 1 + 5
// 6

digital_root(132189)
// 1 + 3 + 2 + 1 + 8 + 9
// 24 ...
// 2 + 4
// 6

digital_root(493193)
// 4 + 9 + 3 + 1 + 9 + 3
// 29 ...
// 2 + 9
// 11 ...
// 1 + 1
// 2
```

---

Solution:

```js
let digitalroot = (function () {
    return function f(n) {
        let sum = n.toString().split('')
            .reduce((sum, digit) => sum + +digit, 0);

        if (sum > 9) {
            return f(sum);
        }

        return sum;
    }
}());
```

---

However, you can avoid converting number to string and again to number, by this solution:

```js
function digitalroot(num) {
    while (num >= 10) {
        num = parseInt(num / 10, 10) + num % 10;
    }

    return num;
}
```

---

Another trick is that digitalroot of `n` is `n % 9`, except when dividable by `9` then it is `9`.

```js
function digitalroot(num) {
    let dividedByNine = num % 9;
    return dividedByNine ? dividedByNine : 9;
}
```