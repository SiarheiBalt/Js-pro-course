import cl from "./Input.module.css"

 export const Button = ({onClick}) => {
     return (
         <div>
             <button onClick={onClick}>Add</button>
         </div>
     )
 }