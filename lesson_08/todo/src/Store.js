
const store = {
    state: {
        current: [
            {id: 1, item: 'Make deal 1.', finished: false, checked: false},
            {id: 2, item: 'Make deal 2.', finished: false, checked: false},
            {id: 3, item: 'Make deal 3.', finished: false, checked: false},
            {id: 4, item: 'Make deal 4.', finished: false, checked: false},
        ],
        arhive: {},
    },
    getState () {
        return this.state;
    },
}
window.store = store;
export default store;