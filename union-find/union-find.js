class UF {
    constructor(n) {
        this._count = n;
        this._id = [];

        for (let i = 0; i < n; i++) {
            this._id[i] = i;
        }
    }

    findRoot(i) {
        return this._id[i];
    }

    setRoot(i, rootId) {
        this._id[i] = rootId;
    }

    connected(p, q) {
        return this.findRoot(p) === this.findRoot(q);
    }

    union(p, q) {
        let pRoot = this.findRoot(p);
        let qRoot = this.findRoot(q);

        if (pRoot === qRoot) return;

        for (let i = 0, l = this._id.length; i < l; i++)
            if (this.findRoot(i) === pRoot)
                this.setRoot(i, qRoot);

        this._count--;
    }

    count() {
        return this._count;
    }
}

let network = new UF(10);
console.log(network.count());
console.log(network.findRoot(1));
console.log(network.findRoot(2));
console.log(network.connected(1, 2));

network.union(4, 3);
console.log(network.count());

network.union(3, 8);
console.log(network.count());

network.union(6, 5);
console.log(network.count());

network.union(9, 4);
console.log(network.count());

network.union(3, 6);
console.log(network.count());

network.union(8, 9);
console.log(network.count());

console.log(network);