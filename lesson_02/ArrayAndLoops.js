
/**
 * Написать цикл, который будет итерироватся от 1 до 100.
 * На каждой итерации цикла нужно проверить:
 * если число кратное 3 - то вывести в консоль строку Fizz,
 * если число кратное 5 - то вывести в консоль строку Buzz,
 * если число кратное и 3 и 5 - то вывести FizzBuzz
 */

// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} FizzBuzz`);
//     } else if (i % 3 === 0) {
//         console.log(`${i} Fizz`);
//     } else if (i % 5 === 0) {
//         console.log(`${i} Buzz`)
//     } else {
//         console.log(i);
//     }
// }

/**
 * Нарисовать прямоугольный треугольник с длинной катетов i (любое число больше 1).
 * Для рисования использовать символ *(звездочка) или %(знак процента) и консоль.
 * Пример вывода:
 *
 **
 ***
 ****
 *****
 ******
 */

 const drawRectangle = (n) => {
    let star = '';
    for (let i = 0; i < n; i++) {
        star = `${star}*`
        console.log(star);
    }
}
drawRectangle(7)

/**
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */

let arr = new Array(15).fill(0);
arr = arr.map((el, i) => el = Math.round(Math.random() * 10))
console.log(arr);
Array.prototype.dellRepeatElement = function () {
    let array = [];
    for(let i of this) {
        if(!array.includes(i)) array.push(i)
    }
    return array
}
console.log(arr.dellRepeatElement())

/**
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */
Array.prototype.countRepeat = function () {
    let count = 0;
    let result = this.reduce((acc, el) => (acc[el] = (acc[el] || 0) + 1, acc), {})
    for(let key in result) {
        if(result[key] > 1) count++
    }
    return count;
}
console.log(arr.countRepeat());