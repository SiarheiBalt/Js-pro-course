import cl from "./Input.module.css"

export const Input = ({text, onChangeInput}) => {

    const onChange = (event) => {
        onChangeInput(event)
    }

    return (
        <div>
            <input className={cl.input} type="text" value={text} onChange={onChange}/>
        </div>
    )
}