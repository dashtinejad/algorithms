# Divisors

Assume you have a chocolate bar consisting, as usual, of a number of squares arranged in a rectangular pattern. Your task is to split the bar into small squares (always breaking along the lines between the squares) with a minimum number of breaks. How many will it take?

```js
function breakChocolate(n, m) {
    return n * m - 1;
}
```