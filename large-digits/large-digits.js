function solution(digits) {
    let numbers = [];

    for (i = 0; i < digits.length - 4; i++) {
        numbers.push(+digits.substr(i, 5))
    }

    return Math.max.apply(null, numbers);
}

console.log(solution("28391"));