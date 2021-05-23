import cl from "./Input.module.css"

export const Input = ({text, onChange}) => {

    return (
        <div>
            <input type="text" value={text} onChange={onChange}/>
        </div>
    )
}