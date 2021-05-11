let dataDefault = [
    {
        id: 1,
        matter: 'Какого цвета елка?',
        answers: ['Зеленая', 'Синяя', 'Черная', 'Белая'],
        rightAnswers: ['1'],
    }, {
        id: 2,
        matter: 'Что не является языком программирования?',
        answers: ['HTML', 'JAVA', 'Phiton', 'CSS'],
        rightAnswers: ['1', '4'],
    }, {
        id: 3,
        matter: 'Кто не является РЭП-исполнителем?',
        answers: ['БАСТА', 'Jimi Hendrix', '50cent', 'Eminem'],
        rightAnswers: ['2'],
    }
];
let data = [];
let stateData = {
    modeIssue: false,
    modeAnswer: false,
    modeRightAnswer: false,
    indexIssue: 0,
    countAnswer: 1,
}


const [main, sendButton, runTestBut, formQuest, input, h4Quest, checkH3, addMatter] = createDiv('main', '#send', '#runTest', '#formQuest', '#getData', '#h4Quest', '#checkH3', '#addMatter');
function createDiv(...div) {
    return div.reduce((acc, el) => [...acc, document.querySelector(el)], [])
}

document.body.addEventListener('click', (event) => {
    if (event.target.id === 'send') data.length === 0 ? getAnswers(dataDefault) : getAnswers(dataDefault.concat(data));
    if (event.target.id === 'runTest') data.length === 0 ? addQuestions(dataDefault) : addQuestions(dataDefault.concat(data.reverse()));
    if (event.target.id === 'addMatter') createQuest();
    if (event.target.id === 'ok') getUserData();
    if (event.target.id === 'cancel') cancel();
})
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && input.value != '') getUserData();
});
const getUserData = () => {
    if (stateData.modeIssue === false && stateData.modeRightAnswer === true) stateData.modeRightAnswer = false;
    if (stateData.modeIssue === true && stateData.modeRightAnswer === true) addRightAnswers();
    if (stateData.modeIssue === true && stateData.modeRightAnswer === false) addAnswer();
    if (stateData.modeIssue === false && stateData.modeRightAnswer === false) addQuest();
}
const cancel = () => {
    if(data.length <= 1) {
        location.reload();
    } else {
        data.shift();
        hide(formQuest);
        runTestBut.disabled = false;
    }
}
const addAnswer = () => {
    if (input.value === '') {
        h4Quest.innerHTML = `Вы не ввели текст ${stateData.countAnswer} варианта ответа. Попробуйте добавить заново.`
    } else {
        data[stateData.indexIssue].answers.push(input.value)
        stateData.countAnswer++;
        if (stateData.countAnswer === 5) {
            input.value = '';
            h4Quest.innerHTML = `Введите ответы через запятую (Пример - 1, 2, 3, 4).`;
            stateData.modeRightAnswer = true;
        } else {
            h4Quest.innerHTML = `Введите текст ${stateData.countAnswer}-го ответа.`;
            input.value = '';
        }
    }
}
const addRightAnswers = () => {
    if (input.value === '' || isNaN(+(input.value.split('')
            .reduce((acc, el) => el < 1 || el > 4 ? NaN : +el))) || input.value > 4 || input.value < 1) {
        h4Quest.innerHTML = `Вы не ввели правильные варианты ответов, от 1го до 4. Попробуйте добавить ответ заново. (Пример - 1, 2, 3, 4)`
    } else {
        data[stateData.indexIssue].rightAnswers = input.value.split(', ');
        input.value = '';
        stateData.modeIssue = false;
        stateData.modeAnswer = false;
        stateData.indexIssue += 1;
        stateData.countAnswer = 1;
        hide(formQuest)
        runTestBut.disabled = false;
    }
}
const addQuest = () => {
    if (input.value === '') {
        h4Quest.innerHTML = `Вы не ввели текст вопроса. Попробуйте добавить вопрос заново.`;
    } else {
        data.push({ answers: [], })
        data[stateData.indexIssue].matter = input.value;
        data[stateData.indexIssue].id = stateData.indexIssue + 1
        stateData.modeIssue = true;
        input.value = '';
        h4Quest.innerHTML = `Введите текст ${stateData.countAnswer}-го ответа.`;
    }
}

const createQuest = () => {
    clearMain();
    hide(checkH3)
    hide(sendButton);
    runTestBut.disabled = true;
    if (stateData.modeIssue === false) {
        h4Quest.innerHTML = `Введите текст вопроса.`;
        show(formQuest)
    }
}
const addQuestions = (arr) => {
    addMatter.disabled = true;
    hide(formQuest)
    clearMain();
    arr.forEach((el) => {
        if (el.id !== undefined) {
            let html = `<form class="form" name="form">
            <div>${el.matter}</div>
            <div><input type="checkbox" name="aaa" class="checkbox" name="" id="" value="1" >${el.answers[0]}</div>
            <div><input type="checkbox" class="checkbox" name="" id="" value="2">${el.answers[1]}</div>
            <div><input type="checkbox" class="checkbox" name="" id="" value="3">${el.answers[2]}</div>
            <div><input type="checkbox" class="checkbox" name="" id="" value="4">${el.answers[3]}</div>
            </form>`
            main.insertAdjacentHTML('afterbegin', html);
            show(sendButton);
        }
    })
    runTestBut.disabled = true;
}
const getAnswers = (n) => {
    let checked = getCheked();
    hide(checkH3);
    if(checked[0].length === 0) {
        show(checkH3);
        checked = getCheked();
    } else {
        let [countTrueAnswers, wrongArr] = (checkAnswers(checked, n))
        showMessageAnswers(countTrueAnswers, n, wrongArr);
    }

    }
const checkAnswers = (arrCheck, right) => {
    let wrongArrAns = [];
    right = right.map((el) => el.rightAnswers.join(',')).reverse();
    arrCheck = arrCheck.map((el) => el.join(','))
    return [right.reduce((acc, el, i) => {
        if (el === arrCheck[i]) {
            acc += 1;
            wrongArrAns.push('')         
        } else {
            wrongArrAns.push(right[i])         
        }
        return acc;
    }, 0), wrongArrAns]
}
const showMessageAnswers = (right, arr, wrongArr) => {
    main.innerHTML = '';
    let html;
    let x = arr.reverse().reduce((acc, el, i) => {
        if(el.rightAnswers.join(',') === wrongArr[i]) acc += `<li>${el.matter}</li>`;
        return acc;
    }, '')
    console.log(right);
    
    if(right === arr.length) {
        html = `<h2>Молодец, все верно!</h2>`
    } else {
        html = `<h4>Всего вопросов - ${arr.length}, верных ответов - ${right}.</h4> 
        <hr> <ul> <h4> Вы не правильно ответили на вопросы: </h4> ${x} </ul> `;
    }
    main.insertAdjacentHTML('afterbegin', html);
    runTestBut.disabled = false;
    addMatter.disabled = false;
    hide(sendButton);
}
const getCheked = () => {
    let form = document.forms;
    let arr = [];
    for (let i of form) {
        i = i.querySelectorAll('.checkbox.checkbox:checked');
        i = Array.from(i).map((el) => el.value)
        arr.push(i)
    }
    return arr;
}
const hide = ((el) => el.classList.add('hide'))
const show = ((el) => el.classList.remove('hide'))
const clearMain = () => main.innerHTML = '';
