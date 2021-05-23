
const store = {
    state: {
        current: [
            {id: 1, item: 'Make deal 1.', finished: false},
            {id: 1, item: 'Make deal 2.', finished: false},
            {id: 1, item: 'Make deal 3.', finished: false},
            {id: 1, item: 'Make deal 4.', finished: false},
        ],
        arhive: {},
    },
    getState () {
        return this.state;
    },
}

export default store;