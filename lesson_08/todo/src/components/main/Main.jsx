import cl from "./Main.module.css"
import { LiCurrent } from "./liCurrent/liCurrent"

export const Main = ({todos}) => {
   
    return (
        <div>
            <ul>
                {todos.map((el, i) => <LiCurrent  currentDeal={el}/>)}
            </ul>
        </div>
    )
}
