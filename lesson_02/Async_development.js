/**
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 * */
 let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved!')
    }, 3000);
})
promise.then((value) => {
    console.log(value);
})
/**
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    }, 3000);
}).catch(() => {
    throw new Error('Promise rejected!')
})
/**
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */
const generatorNumber = (() => Math.round(Math.random() * 10))
let prom = new Promise((resolve, regect) => {
    let n = generatorNumber();
    n <= 5 ? resolve(n) : regect(n);
}).then((value) => {
    console.log(`Your number -${value}`);
}).catch((value) => {
    throw new Error(`Your number - ${value}`)
})

/**
* Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */
const generatorDelay = (() => {
    let delay = Math.round(Math.random() * 10);
    return delay > 5 ? delay -= 5 : delay;
})
const getPromise = () => {
    let delay = generatorDelay()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(delay)
        }, delay * 1000);
    })
}
let prom1 = getPromise();
let prom2 = getPromise();
let prom3 = getPromise();

Promise.all([prom1, prom2, prom3])
    .then((value) => console.log(value.reduce((acc, el) => acc += el)))

/**
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * Отфильтровать массив пользователей, чтобы остались только пользователи с четными  id.
 */

async function loadData(url) {
    const response = await fetch(url);
    const data = await response.json()
    return data
}

const userData = loadData('https://jsonplaceholder.typicode.com/users')
    .then((user) => {
        let userEvenId = [];
        user.forEach(el => {
            if (el.id % 2 === 0) userEvenId.push(el);
        });
        return userEvenId;
    }).then((user) => {
        console.log(user);
    }).catch(() => {
        throw new Error('Noy connection')
    })