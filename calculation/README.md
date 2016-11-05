# Calculator

This time we want to write calculations using functions and get the results. Let's have a look at some examples:



```js
seven(times(five()));  // must return 35
four(plus(nine()));    // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```
---

For solving this problem, you should know about [currying](https://en.wikipedia.org/wiki/Currying).

Currying refers to the process of transforming a function with multiple arity into the same function with less arity. The curried effect is achieved by binding some of the arguments to the first function invoke, so that those values are fixed for the next invocation.

For example, consider a simple plus function, which takes two parameters, and return the sum of them:

```js
function plus(a, b) {
    return a + b;
}

plus(4, 2); // 6
```

We want to make it curried. It means that instead of passing two parameters at the same time,
we pass each parameter one by one:

```js
plus(4)(2); // 6
```

To acheive this purpose, we should return a function inside it:

```js
function plus(a) {
    return function (b) {
        return a + b;
    }
}
```

In this way, we can keep a pointer to our first invoked function, and use it again and again:

```js
let plus4func = plus(4);
plus4func(2); // 6
plus4func(3); // 7
plus4func(4); // 8
```

---

Now we can create our calculator. Note that we need 10 functions for our numbers (0 to 9),
and 4 functions for our operations: `plus`, `minus`, `times`, `dividedBy`.

We should define all these functions as curry one. Let's start by numbers one.

As you see in examples above, the numbers function has two different behaviour: first, you
invoked them without parameter, like `five()`, and second, you invoked them with a parameter
like `five(plus(two()))`.

So we should defined them like this:

```js
function five(f) {
    return f ? f(5) : 5;
}
```

So, if a function passed to it, it will execute it while passing `5` as parameter to it,
otherwise, it will return simple literal `5`. Remeber that the function which we'll pass
to it, is one of our operation functions, `plus`, `minus`, `times`, `dividedBy`.

---

```js
let zero  = f => f ? f(0) : 0;
let one   = f => f ? f(1) : 1;
let two   = f => f ? f(2) : 2;
let three = f => f ? f(3) : 3;
let four  = f => f ? f(4) : 4;
let five  = f => f ? f(5) : 5;
let six   = f => f ? f(6) : 6;
let seven = f => f ? f(7) : 7;
let eight = f => f ? f(8) : 8;
let nine  = f => f ? f(9) : 9;

let plus      = a => b => b + a;
let minus     = a => b => b - a;
let times     = a => b => b * a;
let dividedBy = a => b => b / a;
```

Sample tests:

```js
two(times(five())); // 10
two(plus(five())); // 7
two(minus(five())); // -3
six(dividedBy(three())); // 2
```