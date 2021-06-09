import { data } from './emojiList';

export const store = {
    state: data.concat(0),
    getState(number) {
        return this.state.reduce((acc, el, i) => {
            if (number > i) {
                acc.push(el)
            };
            return acc;
        }, [])
    },
    getAllState() {
        return this.state;
    }
}
