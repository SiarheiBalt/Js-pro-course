import cl from './EmojiItem.module.css'

export const EmojiItem = ({state}) => {

    return (
        <li className={cl.item}>
            {state.title}{state.symbol}
        </li>
    )
}