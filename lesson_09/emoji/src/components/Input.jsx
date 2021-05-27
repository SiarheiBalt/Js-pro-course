
export const Input = ({updateInput, onchngeInput}) => {

    const onChange = (event) => {
        onchngeInput(event);
    };

    return (
        <div>
            <input value={updateInput} onChange={onChange}/>
        </div>
    )
}