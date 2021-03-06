Array.prototype.insertionSort = function () {
    let temp;
    for (let i = 0; i < this.length; i++) {
        if (this[i] < this[i - 1]) moveI(i, this);
    }
    function moveI(a, arr) {
        while (arr[a] < arr[a - 1]) {
            temp = arr[a - 1];
            arr[a - 1] = arr[a];
            arr[a] = temp;
            a--;
        }
        return arr;
    } 
    return this;
}
let arr = [78, 2, 5, 1, 9, 2, 6, 45, 3, 1];
console.log(arr.insertionSort());

Array.prototype.bubbleSort = function () {
    for (let index = 0; index < this.length; index++) {
        let temp;
        for (let i = 0; i < this.length; i++) {
            if (this[i] < this[i - 1]) {
                temp = [this - 1];
                this[i - 1] = this[i];
                this[i] = temp;
            }
        }
    }
    return this;
}
console.log(arr.bubbleSort());

Array.prototype.selectionSort = function() {
    for (let i = 0; i < this.length; i++) {
       let min;
       for (let index = i; index < this.length; index++) {
           if (this[i] > this[index]) {
               min = this[index];
               this[index] = this[i];
               this[i] = min;
           }         
       }
    }
    return this;
}
console.log(arr.selectionSort());

let arr5 = [78, 5,  9, 2, 6, 45, 3, 1];

const quckSort = (array) => {
    if (array.length <= 1) return array;

    let privoIndex = Math.floor(array.length / 2);
    let privot = array[privoIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; i++) {
        if(i === privoIndex) continue;
        if(array[i] < privot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        };
    };
    return [...quckSort(less), privot, ...quckSort(greater)]
};

console.log(quckSort(arr5))