import cl from "./Button.module.css"

export const Button = ({ action, onClick }) => {
    let addClass = '';
    if(action === 'R') addClass = cl.reset;
    if(action === '-') addClass = cl.minus;

    return (
        <div>
            <button className={addClass} onClick={onClick}>{action}</button>
        </div>
    )
}