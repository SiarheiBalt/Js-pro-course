/**
 * Задание 1
 * Создать объект счетчика, который будет иметь поле count - значение счетчика. Объект будет иметь следующие методы:
 * метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
 * (использовать this)
 */
 objCount = {
    count: 0,

    plusCount() {
        this.count++;
    },
    minusCount() {
        this.count--;
    },
    returnCount() {
        return this.count;
    }
}
objCount.plusCount()
objCount.plusCount()
objCount.plusCount()
objCount.minusCount()
let objCountItem = objCount.returnCount()
console.log(objCountItem);

/**
 * Задание 2
 * Создать объект работника в него должны быть следующие свойства: имя, фамилия, стаж, email.
 * Плюс у него должны быть методы: sayHello - функция, которая принимает имя и
 * будет выводить в alert сообщение 'Привет, ИМЯ! Меня зовут ИМЯ_РАБОТНИКА' (использовать this)
 */
let man = {
    name: 'Den',
    firstname: 'Ivanov',
    timeWork: 20,
    email: 'qwe@ua.ru',
    sayHello() {
        console.log(`Hi, my name is ${this.name}!`);
    }
}
man.sayHello();
/**
 * Задание 3
 * Добавить в объект работника поле количество выполненных деталей. Добавить метод,
 * который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0. (использовать this)
 */
man.details = 0;
man.addDetail = function () {
    this.details++;
};
man.resetDetails = function () {
    this.details = 0;
}

/**
 * Задание 4
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */

// function Worker(name, secondName, rate, days,) {
//     this.name = name,
//     this.secondName = secondName,
//     this.rate = rate,
//     this.days = days,

//     this.getSalary = function() {
//         return this.rate * this.days;
//     }
// }
// let manWorker = new Worker('Vitalia', 'Sidorov', 100, 22,);

/**
 * Задание 5
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */
// Worker.prototype.getName = function () {
//     return this.name;
// }
// Worker.prototype.getSecondName = function () {
//     return this.secondName;
// }
// Worker.prototype.setRate = function (n) {
//     return this.rate = n;
// }
// Worker.prototype.setDays = function (n) {
//     return this.days = n;
// }
/**
 * Задание 6
 * Сделать задание 4-5 с использованием классов.
 */

class Worker {
    constructor(name, secondName, rate, days) {
        this.name = name,
            this.secondName = secondName,
            this.rate = rate,
            this.days = days
    }
    getSalary() {
        return this.rate * this.days;
    }
    getName() {
        return this.name;
    }
    getSecondName() {
        return this.secondName;
    }
    setRate(n) {
        return this.rate = n;
    }
    setDays(n) {
        return this.days = n;
    }
}
let manWorker = new Worker('Vitalia', 'Sidorov', 100, 22);
/**
 * Задание 7
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод c,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */
// function MyString(params) {
//     this.string = params,

//     this.reverse = function () {
//         return this.string.split('').reverse().join('');
//     }
//     this.ucFirst = function () {
//         return this.string.split('').map((el, i) => i === 0 ? el.toUpperCase(): el)
//         .join('')
//     }
//     this.ucWords = function () {
//         let a = this.string.split(' ');
//         return a.map((el) => el.split('').map((el, i) => i === 0 ? el.toUpperCase():el)
//             .join(''));
//     }
// }
// let string = new MyString('hello world')
/**
 * Задание 8
 * Сделать задание 7 с использованием классов.
 */
 function MyString() {

    this.reverse = function () {
        return this.string.split('').reverse().join('');
    }
    this.ucFirst = function (value) {
        return value.split('').map((el, i) => i === 0 ? el.toUpperCase(): el)
        .join('')
    }
    this.ucWords = function (value) {
        let a = value.split(' ');
        return a.map((el) => this.ucFirst(el)).join(' ')
    }
}
let func = new MyString()

/**
 * Задание 9
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */

class User {
    constructor(name, surName, email) {
        this.name = name,
        this.surName = surName, 
        this.email = email
    }
    getFullName() {
        return `${this.name} ${this.surName}`
    }
    getEmail() {
        return `${this.email}`
    }
}
let kate = new User('Katia', 'Katianova', 'qaz@ua.by')
/**
 * Задание 10
 * Реализуйте класс Student, который будет наследовать класс User.
 * Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
 * year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
 * с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
 * который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год
 * поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).
 */

class Student extends User {
    constructor(name, surName, email, year) {
        super(name, surName, email)

        this.year = year

    }
    getCourse() {
        return new Date().getFullYear() - this.year;
    }
}
let stud = new Student('Olia', 'Piroshkowa', 'kja@ua.by', 2020)