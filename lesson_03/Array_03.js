/**
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9].
 */
 const generateArray = (n) => new Array(n).fill().map((el) => el = Math.round(Math.random() * 10));

 let arrayTenNum = generateArray(10);
 arrayTenNum.map((el) => el *= el);
 /**
  * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
  */
 let arr20 = generateArray(20);
 arr20.reduce((acc, el) => acc += el);
 
 /**
  * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
  * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
  */
 let num = 5565699;
 let arrNum = num.toString().split('').reduce((acc, el, i, arr) => {
     acc.push(el)
     if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 1] !== undefined) acc.push(':');
     return acc
 }, [])
 console.log(arrNum.join(''));
 /**
  * Создайте 2 массива с разной длинной.
  * Необходимо написать код,который создаёт массив элементов представляющих собой разность
  * соответствующих элементов заданных массивов.
  */
 
 const differenceArrays = ((arr1, arr2) => {
     return arr1.reduce((acc, el, i) => [...acc, (el - arr2[i])], [])
 })
 
 console.log(differenceArrays(generateArray(5), generateArray(7)));
 /**
  * Создайте 2 массива с разной длинной.
  * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
  * соответствующих элементов заданных массивов.
  */
 const summArrays = (arr1, arr2) => {
     return arr1.reduce((acc, el, i) => [...acc, (el + arr2[i])], [])
 }
 console.log(summArrays(generateArray(5), generateArray(7)));
 /**
  * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
  * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
  */
 
 let arr5 = generateArray(5);
 console.log(arr5.reverse());
 
 Array.prototype.myReverse = function () {
     let arr = []
     for (let i = this.length; i > 0; i--) {
         arr.push(this[i-1])
     }
     return arr;
 }
 let arr5reverse =  arr5.myReverse();