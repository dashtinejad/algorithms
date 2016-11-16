class Vector {
    constructor(arr) {
        this.arr = arr;
        this.length = arr.length;
    }

    add(vectorArr) {
        if (this.length != vectorArr.length)
            throw Error;

        let output = [];
        for (let i = 0; i < this.length; i++) {
            output[i] = this.arr[i] + vectorArr.arr[i];
        }

        return new Vector(output);
    }

    subtract(vectorArr) {
        if (this.length != vectorArr.length)
            throw Error;

        let output = [];
        for (let i = 0; i < this.length; i++) {
            output[i] = this.arr[i] - vectorArr.arr[i];
        }

        return new Vector(output);
    }

    dot(vectorArr) {
        if (this.length != vectorArr.length)
            throw Error;

        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this.arr[i] * vectorArr.arr[i];
        }

        return sum;
    }

    norm() {
        return Math.sqrt(this.arr
            .map(digit => Math.pow(digit, 2))
            .reduce((acc, digit) => acc + digit, 0));
    }

    equals(vectorArr) {
        if (this.length != vectorArr.length)
            throw Error;

        let passed = true;
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] !== vectorArr.arr[i]) {
                passed = false;
                break;
            }
        }

        return passed;
    }

    toString() {
        return `(${this.arr.join(',')})`;
    }
}

let a = new Vector([1,2,3]);
let b = new Vector([3,4,5]);
let c = new Vector([5,6,7,8]);

console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.norm());
console.log(a + "");
console.log(a.add(c));