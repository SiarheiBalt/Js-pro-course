import { EmojiItem } from "./EmojiItem/EmojiItem"

export const EmojiList = ({state}) => {

    return (
        <ul>
            {state.map((el) => <EmojiItem key={Math.random().toString(36).substr(2, 9)} state={el} />)}
        
        </ul>
    )
}