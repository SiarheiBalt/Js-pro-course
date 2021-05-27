import cl from "./Input.module.css"

export const Button = ({ submit }) => {

    const onClick = () => {
        submit()
    }

    return (
        <div>
            <button onClick={onClick}>Add</button>
        </div>
    )
}