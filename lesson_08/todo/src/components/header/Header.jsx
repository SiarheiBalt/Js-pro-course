import { Button } from "./input/Button"
import { Input } from "./input/Input"
import cl from "./Header.module.css"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export const Header = ({onClick, text, onChange}) => {

    return (<div>
        <div className={cl.header_top}>
            <h3>ToDo</h3>
            <div className={cl.span}>            
                <span><NavLink to="/Main" activeClassName={cl.activ} className={cl.item}>Main</NavLink></span>
                <span><NavLink to="/Arhive" activeClassName={cl.activ} className={cl.item}>Arhive</NavLink></span>
            </div>
        </div>
        <div className={cl.form_input}>
            <Input text={text}  onChange={onChange}/>
            <Button onClick={onClick}/>
        </div>
    </div>
    )
}