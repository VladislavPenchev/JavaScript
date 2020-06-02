class Sorter {
    sort(items) {
        const { comparer } = this;
        if (comparer) {
            items.sort(comparer);
        }
        return items;
    }
}

class AscendingSorter extends Sorter {
    // comparer(x, y) {
    //     return x - y;
    // }
}

class DecendingSorter extends Sorter {
    comparer(x, y) {
        return y - x;
    }
}

const items = [1, 2, 3, 1, 2, 3];
console.log(new AscendingSorter().sort(items));
console.log(new DecendingSorter().sort(items));