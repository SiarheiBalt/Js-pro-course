import { Avatar } from './avatar/avatar'
import cl from './SideBar.module.css'

const SideBar = (props) => {
    return (
        <div className={cl.sideBar}>
           <Avatar avatar={props.avatar} />
        </div>
    )
}

export default SideBar;