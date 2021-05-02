/**
 * Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.
 */
const summ = ((...n) => n.reduce((acc, el) => acc += el))
console.log(summ(3, 8, 7,));
/**
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf, findIndex не использовать)
 */
const myFindIndex = (arr, n) => {
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            index = i;
            break;
        } else {
            index = -1;
        }
    }
    return index;
}
console.log(myFindIndex([3, 6, 8, 1, 0, 2,], 6));

/**
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 */
function lock() {
    let count = 0;
    return function () {
        count++;
        return count *= count;
    }
}
let count = lock();
console.log(count());
console.log(count());
console.log(count());


/**
 * Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 */
const splitArray = (arr, n) => {
    let array = [];
    while (arr.length > 0) array.push(arr.splice(0, n));
    return array;
}
console.log(splitArray([1, 2, 3, 4, 5], 2))

/**
 * Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
 * внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
 * если введенная строка совпадает с паролем и false – если не совпадает.
 * Пример выполнения функции:
 * let checkPassword = makePassword('somePassword'); //задаем пороль
 *
 * checkPassword('password') // возвращает false
 * checkPassword('somePassword')
 */
const makePassword = (password) => {
    let passwordItem;
    passwordItem = password;
    return (password) => passwordItem === password ? true : false;
}
let checkPassword = makePassword('12345');
console.log(checkPassword('123'));



/**
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */
const someFunction = (str) => {
    return str.split('').map((el) => {
        if (el === ' ') el = '-';
        return el.toLowerCase()
    }).join('')
}
console.log(someFunction('Hello dear hell'));