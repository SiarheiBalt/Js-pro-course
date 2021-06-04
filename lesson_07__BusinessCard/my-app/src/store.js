
let store = {
    state: {
        sideBar: {
            avatar: 'https://sun9-39.userapi.com/impf/c626528/v626528866/6ee84/reLHHmwZH3A.jpg?size=1280x853&quality=96&sign=7bf3d3afb5c1487651ce568726ddcc10&type=album'
        },
        header: {
            fullName: 'Бальцевич Сергей Тадеушевич'
        },
        content: {
            description: 'Текст описание. Еще не придумал.',
            education: "БГУиР, Промыкшленная электроника, 2010г.",
            usedWorks: [
                ['Автобусный завод "МАЗ", инженер-электроник, 2010-2015г.'],
                ['Автобусный завод "МАЗ", ведущий-инженер АСУП, 2015-2020г.'],
                ['Действующий музыкант кавер-группы "NAVIGATOR" с 2015г., сессионный гитарист.'],
            ]
        },
    },
    getState() {
        return this.state
    }
}

export default store;